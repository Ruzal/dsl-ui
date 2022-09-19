<template>
  <div class="ui-dropdown">

    <div class="ui-dropdown-button">
      <slot name="button"></slot>
    </div>

    <div class="ui-dropdown-body">
      <slot name="body"></slot>
    </div>

  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
.ui-dropdown {

  &-button {
  }

  &-body {
    position: absolute;
    top: 0;
  }
}
</style>