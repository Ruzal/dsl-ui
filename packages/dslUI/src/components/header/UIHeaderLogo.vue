<template>
  <div class="ui-header-logo">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.ui-header-logo {
  display: flex;
  align-items: center;

  height: 100%;

  font-size: 18px;
  font-weight: 600;
  line-height: 1;
}
</style>