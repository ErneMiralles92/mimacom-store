<template>
  <div class="cart-payment">
    <div class="cart-payment-total">
      <span class="text-title">Total amount</span>
      <span class="amount">{{ cartStore.totalToPay }}</span>
    </div>
    <hr class="app-divider" style="margin: 1.5rem 0" />
    <button
      class="cart-payment-button"
      data-test-id="paymentButton"
      :disabled="cartStore.cart.length === 0"
    >
      Make a payment
    </button>
  </div>
</template>

<script setup lang="ts">
import { useCartStore } from '../cartStore'
const cartStore = useCartStore()
</script>

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

  .cart-payment-button {
    display: flex;
    align-self: center;
    justify-content: center;
    height: fit-content;
    width: 100%;
    border-radius: 0.325rem;
    padding: 0.75rem 1rem;
    border: 1px solid transparent;
    font-weight: 500;
    font-family: inherit;
    font-size: 1.25rem;
    background: linear-gradient(to right, #9d38af, #7a068f);
    color: #ffffff;

    &:hover {
      box-shadow: $elevation-1;
    }

    &:disabled {
      background: $disabledBackground;
      color: #9e9e9e;
    }
  }
}
</style>
