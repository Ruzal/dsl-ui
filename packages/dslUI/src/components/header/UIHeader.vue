<template>
  <div class="ui-header" :class="classes">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

type HeaderProps = {
  fixed?: boolean;
};

const props = defineProps<HeaderProps>();

const classes = computed(() => [props.fixed && "ui-header-fixed"]);
</script>

<style lang="scss">
@import "@ui/styles/variables.scss";

.ui-header {
  display: flex;
  align-items: center;

  height: 50px;
  width: 100%;
  padding: 0 15px;

  background: $header-background;

  &-fixed {
    position: fixed;
    top: 0;
    left: 0;
  }

  .ui-logo {
    color: #fff;
  }

  .ui-menu {
    color: #fff;
  }
}
</style>
