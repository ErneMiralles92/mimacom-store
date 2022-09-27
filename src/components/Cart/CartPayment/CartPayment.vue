<template>
  <div class="cart-payment">
    <div class="cart-payment-total">
      <span class="text-title">Total amount</span>
      <span class="amount">{{ 100 }}</span>
    </div>
    <hr class="app-divider" style="margin: 1rem 0" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.cart-payment {
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem;

  .cart-payment-total {
    display: flex;
    justify-content: space-between;

    .amount {
      color: $accent;
      font-weight: 700;
      font-size: 1.5rem;
      &:before {
        content: '$ ';
        font-size: 1.25rem;
      }
    }
  }
}
</style>
