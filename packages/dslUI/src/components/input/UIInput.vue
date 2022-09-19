<template>
  <div :class="className">

    <div class="ui-input-container">
      <div class="ui-input-before" v-if="$slots.before">
        <slot name="before"></slot>
      </div>
      
      <input type="text" 
      @input="onInput"
      v-bind="attrs"/>

      <div class="ui-input-after" v-if="$slots.after">
        <slot name="after"></slot>
      </div>

      <div class="ui-input-loading" v-if="loading">
        <div class="ui-loading"></div>
      </div>
    </div>

    <div class="ui-input-message ui-input-message-error" v-if="error">
      {{ error }}
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed, useAttrs } from 'vue';

interface IProps {
  modelValue?: string,
  color?: string,
  size?: string,
  loading?: boolean,
  disabled?: boolean,
  error?: string
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: ""
});

const emits = defineEmits(["update:modelValue"]);

const className = computed(() => {
  const list = ["ui-input"];
  if (props.color) list.push("ui-color-" + props.color);
  if (props.size) list.push("ui-size-" + props.size);
  if (props.loading) list.push("ui-state-loading");
  if (props.disabled) list.push("ui-state-disabled");
  if (props.error) list.push("ui-state-error");
  return list;
});

const attrs = computed(() => {
  const tempAttrs = {...useAttrs()};
  if (tempAttrs.class) delete tempAttrs.class;
  if (tempAttrs.id) delete tempAttrs.id;
  return tempAttrs;
});

function onInput(event: Event) {
  const value = (event.target as HTMLInputElement).value;
  emits("update:modelValue", value);
}
</script>

<style lang="scss">
@import "@ui/styles/variables.scss";

@mixin inputBorderColor($borderColor) {
  .ui-input-container {
    border-color: $borderColor;

    &:hover, &:focus-within {
      border-color: darken($borderColor, 10);
    }
  }
}

.ui-input {

  &-container {
    display: flex;
    align-items: center;

    height: 40px;
    padding: 0 10px;

    background: #fff;
    border: 1px solid $color-outline;
    border-radius: 6px;

    transition: border-color .3s ease;

    input {
      flex-grow: 1;
      height: 100%;
    }

    &:hover, &:focus-within {
      border-color: darken($color-outline, 10);
    }
  }

  &-before, &-after, &-loading {
    flex-shrink: 0;
    display: flex;
  }

  &-before {
    margin-right: 5px;
  }

  &-after {
    margin-left: 5px;
  }

  &-message {
    margin-bottom: 5px;
    font-size: 12px;
    
    &-error {
      color: $color-red;
    }
  }

  .ui-loading {
    width: 18px;
    height: 18px;
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

  &.ui-state-error {
    .ui-input-container {
      border-color: $color-red;
    }
  }
}
</style>