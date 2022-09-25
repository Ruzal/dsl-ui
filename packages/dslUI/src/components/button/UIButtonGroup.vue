<template>
  <div class="ui-button-group" :class="classes">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

type Props = {
  vertical?: boolean;
};

const props = defineProps<Props>();

const classes = computed(() => [props.vertical && "ui-vertical"]);
</script>

<style lang="scss">
.ui-button-group {
  display: inline-flex;

  &:not(.ui-vertical) {
    .ui-button {
      border-radius: 0;

      &:first-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
      }

      &:last-child {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }

      &.ui-outline {
        &:not(:first-child) {
          border-left-color: transparent;
        }
        &:not(:last-child) {
          border-right-color: transparent;
        }
      }
    }
  }

  &.ui-vertical {
    flex-direction: column;

    .ui-button {
      border-radius: 0;

      &:first-child {
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
      }

      &:last-child {
        border-bottom-left-radius: 6px;
        border-bottom-right-radius: 6px;
      }

      &.ui-outline {
        &:not(:first-child) {
          border-top-color: transparent;
        }
        &:not(:last-child) {
          border-bottom-color: transparent;
        }
      }
    }
  }
}
</style>