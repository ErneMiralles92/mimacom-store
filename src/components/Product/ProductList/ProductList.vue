<template>
  <div>
    <div ref="paginationContainer" class="product-list">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="product-list-item"
      >
        <ProductItem :product="product" @update-favorite="setFavorite" />
      </div>
      <div ref="sentinel" class="sentinel" />
    </div>
    <div
      v-if="isLoading"
      style="margin-top: 0.5rem; display: flex; justify-content: center"
    >
      <AppSpinner />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductItem from '../ProductItem'
import AppSpinner from '../../UI/AppSpinner.vue'
import { computed, ref } from 'vue'
import { useProduct } from '../composable'
import { useIntersectionObserver } from '@vueuse/core'
import { Product } from '../../../types'

interface Props {
  favorite: boolean
}
const props = defineProps<Props>()

const sentinel = ref(null)
const targetIsVisible = ref(false)
const { stop: stopObserver } = useIntersectionObserver(
  sentinel,
  ([{ isIntersecting }]) => {
    targetIsVisible.value = isIntersecting
    if (isIntersecting) {
      onLoadMore()
    }
  },
)

const { products, getMoreProducts, isLoading, updateProduct } = useProduct()
const paginationContainer = ref<HTMLElement | null>(null)
const page = ref(1)
const onLoadMore = async () => {
  const { data, error } = await getMoreProducts({
    page: page.value,
    perPage: 12,
    favorite: props.favorite ? 1 : undefined,
  })
  if (!error && data.length === 0) {
    stopObserver()
  }
  page.value++
}

const filteredProducts = computed(() => {
  if (props.favorite) {
    return products.value.filter((item) => +item.favorite === 1)
  }
  return products.value
})

const setFavorite = async (product: Product) => {
  updateProduct(product.id, {
    favorite: +product.favorite === 1 ? 0 : 1,
  })
}
</script>

<style scoped lang="scss">
.product-list {
  display: flex;
  flex-wrap: wrap;
  margin: -0.25rem;

  @media screen and (min-width: $breakpoint-sm) {
    margin: -0.5rem;
  }
  .product-list-item {
    padding: 0.25rem;
    flex: 0 0 calc(6 / 12 * 100%);
    max-width: calc(6 / 12 * 100%);

    @media screen and (min-width: $breakpoint-md) {
      flex: 0 0 calc(4 / 12 * 100%);
      max-width: calc(4 / 12 * 100%);
    }

    @media screen and (min-width: $breakpoint-lg) {
      flex: 0 0 calc(3 / 12 * 100%);
      max-width: calc(3 / 12 * 100%);
    }
  }
  .sentinel {
    width: 1rem;
    height: 1rem;
  }
}
</style>
