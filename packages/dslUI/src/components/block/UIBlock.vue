<template>
  <div class="ui-block">
    <div class="ui-block-header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div class="ui-block-body">
      <slot></slot>
    </div>
    <div class="ui-block-footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss">
.ui-block {
  width: 100%;

  background: #fff;

  border-radius: 6px;

  &-body {
    padding: 20px;
  }
}
</style>
