<template>
  <div class="ui-sidebar-menu-item" :class="classes">
    <UIIcon :path="props.icon" v-if="props.icon"></UIIcon>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import UIIcon from "../icon/UIIcon.vue";

type Props = {
  icon?: string;
  active?: boolean;
};

const props = defineProps<Props>();

const classes = computed(() => [props.active && "ui-active"]);
</script>

<style lang="scss">
@import "@ui-style-vars";

.ui-sidebar-menu-item {
  display: flex;
  align-items: center;

  height: 40px;
  padding: 0 15px;

  border-radius: 6px;

  font-weight: 700;
  color: $sidebar-menu-item-color;

  transition: background 0.3s ease, color 0.3s ease;

  cursor: pointer;

  &:hover {
    color: $sidebar-menu-item-hover-color;
  }

  &.ui-active {
    background: $sidebar-menu-item-active-background;
    color: $sidebar-menu-item-active-color;
  }

  .ui-icon {
    margin-right: 15px;
  }
}
</style>
