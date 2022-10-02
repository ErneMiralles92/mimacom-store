<template>
  <div class="the-header">
    <div class="app-container row align-center" style="height: 100%">
      <div class="the-header-logo" @click="router.push('/')">
        <img alt="logo" src="/mimacom.svg" />
      </div>
      <div class="">
        <h6>Grocery</h6>
      </div>
      <div style="flex-grow: 1" />
      <button
        v-if="route.name !== 'home'"
        class="nav_btn go-back-btn hide-on-desktop"
        @click="router.push('/')"
      >
        <AppIcon size="24" color="white">mdi-home</AppIcon>
      </button>
      <button
        v-if="route.name !== 'cart'"
        class="nav_btn cart-btn hide-on-desktop"
        @click="router.push({ name: 'cart' })"
      >
        <AppIcon size="20" color="white">mdi-cart</AppIcon>
        <div
          v-if="cartStore.cart.length > 0"
          class="app-badge"
          size="16"
          :style="{
            'background-color': '#9c27b0',
            color: '#FFFFFF',
          }"
        >
          {{ cartStore.cart.length }}
        </div>
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import AppIcon from '../UI/AppIcon.vue'
import { useCartStore } from '../Cart/cartStore'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const cartStore = useCartStore()
</script>

<style lang="scss" scoped>
.the-header {
  position: fixed;
  height: $headerHeight;
  width: 100%;
  padding: 0.5rem 0;
  background-color: #ffffff;
  z-index: 5;
  border-bottom: 1px solid $dividerColor;
  padding-right: 0;

  @media screen and (min-width: $breakpoint-md) {
    padding-right: calc(1.5rem + #{$sideBarWidth});
  }

  @media screen and (min-width: $breakpoint-xl) {
    padding-right: calc(1.5rem + #{$sideBarXlWidth});
  }

  .the-header-logo {
    height: 1.5rem;
    margin-right: 1rem;

    img {
      width: auto;
      height: 100%;
    }
  }

  .nav_btn {
    position: relative;
    border-radius: 50%;
    border: 1px solid transparent;
    color: #ffffff;

    &:hover {
      box-shadow: $elevation-1;
    }
  }
  .cart-btn {
    background-color: $primary;
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .go-back-btn {
    position: relative;
    border-radius: 50%;
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid transparent;
    background-color: $primary;
    color: #ffffff;

    &:hover {
      box-shadow: $elevation-1;
    }
  }
}
</style>
