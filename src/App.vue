<script setup lang="ts">
import ProductList from './components/Product/ProductList'
</script>

<template>
  <div class="app-container">
    <ProductList />
  </div>
</template>

<style scoped lang="scss">
.app-container {
  margin: 0 auto;
  padding: 1rem 1.5rem;
  max-width: $breakpoint-lg;
  background-color: #fefefe;
}
</style>
