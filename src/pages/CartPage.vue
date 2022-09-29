<template>
  <div class="column">
    <h5 class="primary--text">Cart</h5>
    <CartList style="margin-top: -0.25rem" />
    <div class="bottom-section">
      <CartPayment />
    </div>
  </div>
</template>

<script setup lang="ts">
import CartList from '../components/Cart/CartList'
import CartPayment from '../components/Cart/CartPayment'
</script>

<style scoped lang="scss">
.bottom-section {
  position: fixed;
  align-self: center;
  bottom: 0;
  background-color: #f5f5f5;
  width: 100%;
  border-top: 1px solid $dividerColor;
}
</style>
