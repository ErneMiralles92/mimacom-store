<template>
  <div ref="paginationContainer" class="product-list">
    <div
      v-for="product in products"
      :key="product.id"
      class="product-list-item"
    >
      <ProductItem :product="product" />
    </div>
    <div ref="sentinel" class="sentinel" />
  </div>
</template>

<script setup lang="ts">
import ProductItem from '../ProductItem'
import { ref } from 'vue'
import { useProduct } from '../composable'
import { useIntersectionObserver } from '@vueuse/core'

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

const { products, getMoreProducts } = useProduct()
const paginationContainer = ref<HTMLElement | null>(null)
const page = ref(1)
const onLoadMore = async () => {
  const { data, error } = await getMoreProducts({
    page: page.value,
    perPage: 12,
  })
  if (!error && data.length === 0) {
    stopObserver()
  }
  page.value++
}
</script>

<style scoped lang="scss">
.product-list {
  display: flex;
  flex-wrap: wrap;
  margin: -0.5rem;
  .product-list-item {
    padding: 0.5rem;
    flex: 0 0 calc(6 / 12 * 100%);
    max-width: calc(6 / 12 * 100%);

    @media screen and (min-width: $breakpoint-sm) {
      flex: 0 0 calc(4 / 12 * 100%);
      max-width: calc(4 / 12 * 100%);
    }
    @media screen and (min-width: $breakpoint-md) {
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
