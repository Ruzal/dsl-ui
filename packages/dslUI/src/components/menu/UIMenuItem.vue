<template>
  <div class="ui-menu-item">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.ui-menu-item {
  display: flex;
  align-items: center;

  height: 40px;
  padding: 0 15px;

  cursor: pointer;
}
</style>
