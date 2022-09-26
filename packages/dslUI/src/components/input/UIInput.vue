<template>
  <div class="ui-input" :class="classes">
    <div class="ui-input-before" v-if="$slots.before">
      <slot name="before"></slot>
    </div>

    <input type="text" @input="onInput" v-bind="attrs" :disabled="props.disabled" />

    <div class="ui-input-after" v-if="$slots.after">
      <slot name="after"></slot>
    </div>

    <div class="ui-input-loading" v-if="loading">
      <UILoading />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, useAttrs } from "vue";
import UILoading from "../loading/UILoading.vue";

type Props = {
  modelValue?: string;
  color?: "red" | "green" | "blue" | "yellow" | "purple";
  size?: string; //TODO: Change size values: small, medium (default), large
  loading?: boolean;
  disabled?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
  modelValue: "",
});

const emits = defineEmits<{
  (e: "update:modelValue", v: string): void; //eslint-disable-line
}>();

const classes = computed(() => [
  props.color && "ui-color-" + props.color,
  props.size && "ui-size-" + props.size,
  props.loading && "ui-state-loading",
  props.disabled && "ui-state-disabled",
]);

const attrs = computed(() => {
  const _ = { ...useAttrs() };
  if (_.class) delete _.class;
  if (_.id) delete _.id;
  return _;
});

function onInput(event: Event) {
  const value = (event.target as HTMLInputElement).value;
  emits("update:modelValue", value);
}
</script>

<style lang="scss">
@import "@ui-style-vars";

@mixin inputBorderColor($borderColor) {
  border-color: $borderColor;

  &:hover {
    border-color: darken($borderColor, 10);
  }

  &:focus-within {
    box-shadow: 0 0 0 3px rgba($borderColor, 0.3);
  }
}

.ui-input {
  display: flex;
  align-items: center;

  height: 36px;
  padding: 0 20px;

  background: #fff;
  border: 1px solid $color-outline;
  border-radius: 6px;

  transition: border-color 0.3s ease;

  cursor: text;

  input {
    flex-grow: 1;
    height: 100%;

    cursor: inherit;
  }

  &:hover {
    border-color: darken($color-outline, 10);
  }

  &:focus-within {
    box-shadow: 0 0 0 3px rgba($color-outline, 0.3);
  }

  &-before,
  &-after,
  &-loading {
    flex-shrink: 0;
    display: flex;
  }

  &-before {
    margin-right: 5px;
  }

  &-after {
    margin-left: 5px;
  }

  &.ui-color {
    @each $colorName, $color in $colorMap {
      &-#{$colorName} {
        @include inputBorderColor($color);
      }
    }
  }

  &.ui-size {
    &-1 {
      .ui-input-container {
        height: 24px;
      }
    }
    &-2 {
      .ui-input-container {
        height: 32px;
      }
    }
    &-3 {
      .ui-input-container {
        height: 40px;
      }
    }
    &-4 {
      .ui-input-container {
        height: 48px;
      }
    }
  }

  &.ui-state-loading {
    cursor: wait;
  }

  &.ui-state-disabled {
    cursor: not-allowed;
  }
}
</style>
