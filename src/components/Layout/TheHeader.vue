<template>
  <div class="the-header">
    <div class="container row align-center" style="height: 100%">
      <div class="the-header-logo">
        <img alt="logo" src="/mimacom.svg" />
      </div>
      <div class="">
        <h6>Grocery</h6>
      </div>
      <div style="flex-grow: 1" />
      <button class="cart-btn show-on-mobile">
        <AppIcon size="16" color="white">mdi-cart</AppIcon>
        <div
          class="badge"
          size="16"
          :style="{
            'background-color': '#9c27b0',
            color: '#FFFFFF',
          }"
        >
          {{ 3 }}
        </div>
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import AppIcon from '../UI/AppIcon.vue'
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

  @media screen and (min-width: $breakpoint-sm) {
    padding-right: $sideBarTabletWidth;
  }

  @media screen and (min-width: $breakpoint-md) {
    padding-right: calc(1.5rem + #{$sideBarWidth});
  }

  .container {
    .the-header-logo {
      height: 1.5rem;
      margin-right: 1rem;

      img {
        width: auto;
        height: 100%;
      }
    }
    .cart-btn {
      position: relative;
      border-radius: 50%;
      padding: 0.5rem;
      border: 1px solid transparent;
      background-color: $primary;
      color: #ffffff;

      &:hover {
        box-shadow: $elevation-1;
      }
      &:focus,
      &:focus-visible {
        outline: none;
      }
      .badge {
        border-radius: 50%;
        color: #fafafa;
        height: 18px;
        width: 18px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: -0.325rem;
        right: -0.325rem;
      }
    }
  }
}
</style>
