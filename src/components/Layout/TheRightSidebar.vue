<template>
  <aside class="app-sidebar">
    <slot class="app-nav-top" name="top" />
    <nav class="app-nav-content">
      <slot name="default" />
    </nav>
    <slot class="app-nav-bottom" name="bottom" />
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
  padding: 1rem 0.75rem;
  overflow: hidden;
  margin-left: 4px;
  z-index: 10;
  position: fixed;
  border-left: 1px solid $dividerColor;
  display: none;

  @media screen and (min-width: $breakpoint-md) {
    display: flex;
    width: $sideBarWidth;
  }
  .app-nav-content {
    height: 100%;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    @include scrollbars(6px, #9e9e9e);
  }
}
</style>
