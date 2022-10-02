<template>
  <div class="row justify-between align-center" style="margin: 0.5rem 0 1.5rem">
    <h5 class="primary--text" style="margin: 0">
      {{ favorite ? 'Favorite products' : 'Product List' }}
    </h5>
    <button
      class="filter-favorite-btn"
      :disabled="producStore.isUpdating"
      @click="favorite = !favorite"
    >
      <div class="row justify-between align-center">
        <span style="margin-right: 0.5rem">
          {{ favorite ? 'See all' : 'See favorites' }}
        </span>
        <AppIcon size="20" color="#01398d"
          >{{ favorite ? 'mdi-filter-remove' : 'mdi-filter-variant ' }}
        </AppIcon>
      </div>
    </button>
  </div>
  <ProductList v-if="favorite" :favorite="favorite" />
  <ProductList v-show="!favorite" :favorite="favorite" />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ProductList from '../components/Product/ProductList'
import AppIcon from '../components/UI/AppIcon.vue'
import { useProductStore } from '../components/Product/productStore'

const producStore = useProductStore()
const favorite = ref(false)
</script>

<style scoped lang="scss">
.filter-favorite-btn {
  display: flex;
  align-self: center;
  height: fit-content;
  border-radius: 0.325rem;
  padding: 0.5rem 0.5rem;
  border: 1px solid $primary;
  font-weight: 500;
  font-family: inherit;
  font-size: 1rem;
  background: transparent;
  color: $primary;
  cursor: pointer;

  span {
    color: $primary;
    font-size: 1.25rem;
  }

  &:disabled {
    cursor: not-allowed;
  }

  &:hover {
    box-shadow: $elevation-1;
    background-color: #cfd8dc;
  }
  &:focus,
  &:focus-visible {
    outline: none;
  }
}
</style>
