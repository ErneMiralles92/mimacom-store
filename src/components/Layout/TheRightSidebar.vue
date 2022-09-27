<template>
  <aside class="app-sidebar">
    <nav class="app-nav-content">
      <h5>Cart</h5>
    </nav>
  </aside>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
$borderRadiusRight: 0.5rem;
$asideGap: $headerHeight;

aside {
  height: calc(100vh - #{$asideGap});
  top: $asideGap;
}

.app-sidebar {
  display: none;
  flex-direction: column;
  right: 0;
  padding: 1rem;
  overflow: hidden;
  margin-left: 4px;
  z-index: 10;
  position: fixed;
  border-left: 1px solid $dividerColor;
  display: none;

  @media screen and (min-width: $breakpoint-sm) {
    display: flex;
    width: $sideBarTabletWidth;
  }
  @media screen and (min-width: $breakpoint-md) {
    width: $sideBarWidth;
  }
  .app-nav-content {
    height: 100%;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
  }
}
</style>
