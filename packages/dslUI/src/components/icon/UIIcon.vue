<template>
  <svg :width="props.size" :height="props.size" viewBox="0 0 24 24" fill="currentColor" class="ui-icon">
    <path :d="props.path"></path>
  </svg>
</template>

<script setup lang="ts">
interface IProps {
  path: string;
  size?: number;
}

const props = withDefaults(defineProps<IProps>(), {
  size: 24,
});
</script>

<style lang="scss"></style>
