<template>
  <div class="product-list">
    <div
      v-for="product in products"
      :key="product.id"
      class="product-list-item"
    >
      <ProductItem :product="product" />
    </div>
  </div>
</template>

<script setup lang="ts">
import ProductItem from '../ProductItem'
import { Product } from '../../../types'
import { toRefs } from 'vue'

interface Props {
  products: Array<Product>
}
const props = defineProps<Props>()
const { products } = toRefs(props)
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
}
</style>
