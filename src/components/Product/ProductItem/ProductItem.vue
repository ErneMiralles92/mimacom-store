<template>
  <div class="product-item">
    <div class="aspect-ratio-box">
      <img
        class="aspect-ratio-box-inside product-item-image"
        :src="product.image_url"
        :alt="product.productName"
      />
    </div>
    <div class="product-item-content">
      <div class="row justify-between" style="margin-top: 0.5rem">
        <span class="product-item-title">{{ product.productName }}</span>
        <span class="product-item-price">$ {{ product.price }}</span>
      </div>
      <p class="product-item-description text-subtitle">
        {{ product.productDescription }}
      </p>
      <div class="row justify-between align-center" style="margin-top: 1rem">
        <span class="product-item-availability">
          {{ product.stock }} left
        </span>
        <button class="product-item-button">Add</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import { Product } from '../../../types'
interface Props {
  product: Product
}

const props = defineProps<Props>()
const { product } = toRefs(props)
</script>

<style scoped lang="scss">
.product-item {
  display: block;
  max-width: 300px;
  outline: none;
  position: relative;
  white-space: normal;
  border-radius: 6px;
  box-shadow: $elevation-1;

  &:hover {
    box-shadow: $elevation-2;
  }

  .aspect-ratio-box {
    height: 0;
    overflow: hidden;
    padding-top: 100%;
    position: relative;
    .aspect-ratio-box-inside {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .product-item-image {
    border-radius: 6px 6px 0 0;
  }

  .product-item-content {
    padding: 0 1rem 1rem;

    .product-item-title {
      padding-right: 0.25rem;
      font-weight: 700;
      font-size: 0.875rem;

      @media screen and (min-width: $breakpoint-md) {
        font-size: 1rem;
      }
    }

    .product-item-price {
      color: $primary;
      font-weight: 700;
      font-size: 0.875rem;

      @media screen and (min-width: $breakpoint-md) {
        font-size: 1rem;
      }
    }

    .product-item-description {
      display: none;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 1;
      overflow: hidden;
      margin: 0.25rem 0;

      @media screen and (min-width: $breakpoint-sm) {
        display: -webkit-box;
      }
      @media screen and (min-width: $breakpoint-md) {
        -webkit-line-clamp: 2;
      }
    }

    .product-item-availability {
      color: $accent;
      padding-right: 0.25rem;
      font-weight: 700;
      font-size: 0.875rem;
      font-style: italic;

      @media screen and (min-width: $breakpoint-md) {
        font-size: 1rem;
      }
    }

    .product-item-button {
      border-radius: 6px;
      border: 1px solid transparent;
      padding: 0.5rem 1rem;
      font-size: 1em;
      font-weight: 500;
      text-transform: uppercase;
      font-family: inherit;
      font-size: 0.875rem;
      background-color: $primary;
      color: #ffffff;
      cursor: pointer;
      transition: border-color 0.25s;

      &:hover {
        box-shadow: $elevation-1;
      }
      &:focus,
      &:focus-visible {
        outline: none;
      }
    }
  }
}
</style>
