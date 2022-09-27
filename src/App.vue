<script setup lang="ts">
import ProductList from './components/Product/ProductList'
import TheHeader from './components/Layout/TheHeader.vue'
import TheRightSidebar from './components/Layout/TheRightSidebar.vue'
</script>

<template>
  <TheHeader />
  <TheRightSidebar />
  <main>
    <div class="app-container container">
      <h5>Product List</h5>
      <ProductList />
    </div>
  </main>
</template>

<style scoped lang="scss">
main {
  padding-top: $headerHeight;
  padding-right: 0;

  @media screen and (min-width: $breakpoint-sm) {
    padding-right: $sideBarTabletWidth;
  }

  @media screen and (min-width: $breakpoint-md) {
    padding-right: calc(1.5rem + #{$sideBarWidth});
  }
  .app-container {
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-color: #fefefe;
  }
}
</style>
