<template>
  <TheHeader />
  <TheRightSidebar>
    <template #top><h5 class="primary--text">Cart</h5></template>
    <CartList style="margin-top: -0.25rem" />
    <template #bottom>
      <CartPayment />
    </template>
  </TheRightSidebar>
  <main>
    <div class="app-container container">
      <router-view></router-view>
    </div>
  </main>
</template>

<script setup lang="ts">
import TheHeader from '../components/Layout/TheHeader.vue'
import TheRightSidebar from '../components/Layout/TheRightSidebar.vue'
import CartList from '../components/Cart/CartList'
import CartPayment from '../components/Cart/CartPayment'
</script>

<style scoped lang="scss">
main {
  padding-top: $headerHeight;
  padding-right: 0;

  @media screen and (min-width: $breakpoint-md) {
    padding-right: calc(1.5rem + #{$sideBarWidth});
  }
  @media screen and (min-width: $breakpoint-xl) {
    padding-right: calc(1.5rem + #{$sideBarXlWidth});
  }
  .app-container {
    padding-top: 1rem;
    padding-bottom: 1rem;
    background-color: #fefefe;
  }
}
</style>
