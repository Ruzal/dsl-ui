<template>
  <button class="ui-button" :class="classes" :disabled="disabled" :type="type">
    <div class="ui-button-container">
      <div class="ui-button-before" v-if="$slots.before">
        <slot name="before"></slot>
      </div>

      <div class="ui-button-name">
        <slot></slot>
      </div>

      <div class="ui-button-after" v-if="$slots.after">
        <slot name="after"></slot>
      </div>
    </div>

    <div class="ui-button-loading" v-if="loading">
      <UILoading />
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed } from "vue";
import UILoading from "../loading/UILoading.vue";

type IProps = {
  block?: boolean;
  color?: "red" | "green" | "blue" | "yellow" | "purple";
  outline?: boolean;
  size?: string;
  loading?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};

const props = withDefaults(defineProps<IProps>(), {
  type: "button",
});

const classes = computed(() => [
  props.block && "ui-button-block",
  props.color && "ui-color-" + props.color,
  props.outline && "ui-outline",
  props.size && "ui-size-" + props.size,
  props.loading && "ui-state-loading",
  props.disabled && "ui-state-disabled",
]);
</script>

<style lang="scss">
@import "@ui/styles/variables.scss";

@mixin btnColor($backgroundColor, $fontColor) {
  background-color: $backgroundColor;
  color: $fontColor;

  &:hover {
    background-color: darken($backgroundColor, 10);
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba($backgroundColor, 0.3);
  }

  &.ui-state-loading {
    background-color: $backgroundColor;
  }
}

@mixin btnOutlineColor($outlineColor, $fontColor) {
  border-color: $outlineColor;
  color: $fontColor;

  &:hover {
    border-color: darken($outlineColor, 10);
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba($outlineColor, 0.3);
  }

  &.ui-state-loading {
    border-color: $outlineColor;
  }
}

.ui-button {
  position: relative;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  border: 1px solid transparent;
  border-radius: 6px;
  transition: background-color 0.3s ease;

  cursor: pointer;

  &-block {
    display: flex;
    width: 100%;
  }

  &-container {
    display: flex;
    align-items: center;

    height: 36px;
    padding: 0 20px;
  }

  &-before,
  &-after {
    flex-shrink: 0;
    display: flex;
  }

  &-before {
    margin-right: 5px;
  }

  &-after {
    margin-left: 5px;
  }

  &-loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
  }

  &.ui-outline {
    @each $name, $color in $colorMap {
      &.ui-color-#{$name} {
        @include btnOutlineColor($color, $color);
      }
    }
  }

  &:not(.ui-outline) {
    &.ui-color {
      @each $name, $color in $colorMap {
        &-#{$name} {
          @include btnColor($color, #fff);
        }
      }
    }
  }

  &:not(.ui-outline):not([class*="ui-color-"]) {
    border-color: $color-outline;
  }

  &.ui-size {
    &-1 {
      .ui-button-container {
        height: 24px;
        padding: 0 5px;
        font-size: 12px;
      }
    }

    &-2 {
      .ui-button-container {
        height: 32px;
      }
    }

    &-3 {
      .ui-button-container {
        height: 40px;
        padding: 0 20px;
      }
    }

    &-4 {
      .ui-button-container {
        height: 48px;
        padding: 0 25px;
      }
    }
  }

  &.ui-state-loading {
    cursor: wait;

    .ui-button-container {
      visibility: hidden;
    }
  }

  &.ui-state-disabled {
    cursor: not-allowed;
  }
}
</style>
