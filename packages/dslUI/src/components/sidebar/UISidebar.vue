<template>
  <div class="ui-sidebar" :class="classes">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

type Props = {
  opened?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  opened: true,
});

const classes = computed(() => [props.opened && "ui-sidebar-opened"]);
</script>

<style lang="scss">
@import "@ui-style-vars";

.ui-sidebar {
  display: flex;
  flex-direction: column;

  width: 300px;
  height: 100%;

  background: $sidebar-background;
}
</style>
