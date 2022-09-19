<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

type HeaderMenuItemProps = {
  active?: boolean
}

const props = defineProps<HeaderMenuItemProps>();

const classes = computed(() => {
  return [
    "ui-header-menu-item",
    (props.active && "ui-active")
  ]
});

</script>

<style lang="scss">
.ui-header-menu-item {
  position: relative;

  display: flex;
  align-items: center;

  height: 100%;
  padding: 0 15px;

  font-size: 14px;
  font-weight: 600;

  line-height: 1;

  cursor: pointer;

  &.ui-active {
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: $color-green;
    }
  }
}
</style>