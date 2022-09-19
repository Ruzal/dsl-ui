<template>
  <div class="ui-sidebar-menu">
    <div class="ui-sidebar-menu-title" v-if="props.title">{{ props.title }}</div>
    <div class="ui-sidebar-menu-body">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
type Props = {
  title?: string;
};

const props = defineProps<Props>();
</script>

<style lang="scss">
.ui-sidebar-menu {
  margin-top: 20px;
  padding: 0 20px;

  &-title {
    margin-bottom: 10px;

    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
  }
}
</style>
