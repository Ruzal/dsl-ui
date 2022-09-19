<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';


type LayoutProps = {
  row?: boolean,
  column?: boolean
}

const props = defineProps<LayoutProps>();

const classes = computed(() => {
  return [
    "ui-layout",
    (props.row && "ui-layout-row"),
    (props.column && "ui-layout-column")
  ]
});
</script>

<style lang="scss">
.ui-layout {
  display: flex;
  flex-wrap: wrap;

  &-row {
    flex-wrap: nowrap;
    flex-direction: row;
  }

  &-column {
    flex-wrap: nowrap;
    flex-direction: column;
  }
}
</style>