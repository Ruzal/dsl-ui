<template>
  <div :class="className" v-click-outside="hide">
    
    <div class="ui-select-container" @click.prevent="toggle">
      <div class="ui-select-before" v-if="$slots.before">
        <slot name="before"></slot>
      </div>

      <div class="ui-select-value">
        {{ valueName }}
      </div>

      <div class="ui-select-after" v-if="$slots.after">
        <slot name="after"></slot>
      </div>
    </div>
    
    <div class="ui-select-options" v-if="isShow" ref="optionsRef">
      <div class="ui-select-list">
        <div class="ui-select-list-item" 
        v-for="option in options"
        @click.prevent="select(option.value)">
          {{ option.name }}
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, Ref, ref } from 'vue';
import vClickOutside from "../../directives/clickOutside";

interface IOption {
  name: string,
  value: string|number|null
}

interface IProps {
  modelValue?: string,
  options: IOption[],
  color?: string,
  size?: string,
  disabled?: boolean,
  placeholder?: string,
  error?: string
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: "",
  placeholder: "Select..."
});

const emits = defineEmits(["update:modelValue", "selected"]);

const className = computed(() => {
  const list = ["ui-select"];
  if (props.color) list.push("ui-color-" + props.color);
  if (props.size) list.push("ui-size-" + props.size);
  if (props.disabled) list.push("ui-state-disabled");
  if (props.error) list.push("ui-state-error");
  return list;
});

const options = computed(() => {
  return props.options.filter((el) => el.value !== props.modelValue);
});

const valueName = computed(() => {
  if (props.modelValue) {
    const option = props.options.find((el) => el.value === props.modelValue);
    return option?.name || props.modelValue;
  }
  return props.placeholder;
});

const optionsRef: Ref<HTMLElement | null> = ref(null);

const isShow: Ref<boolean> = ref(false);

function show() {
  isShow.value = true;

  nextTick(() => {
    if (optionsRef.value) {
      const bondings: DOMRect = optionsRef.value.getBoundingClientRect();
      if (bondings.height + bondings.top > window.innerHeight) {
        optionsRef.value.classList.add("ui-select-options-upper");
      }
    }
  })
}

function hide() {
  isShow.value = false;
}

function toggle() {
  if (isShow.value) hide();
  else show();
}

function select(value: string|number|null) {
  emits("update:modelValue", value);
  emits("selected", value);
  hide();
}
</script>

<style lang="scss">
@mixin selectColor($borderColor) {
  .ui-select-container {
    border-color: $borderColor;

    &:hover {
      border-color: darken($borderColor, 10);
    }
  }
}

.ui-select {
  position: relative;

  &-container {
    display: flex;
    align-items: center;

    height: 40px;
    padding: 0 10px;

    background: #fff;
    border: 1px solid $color-outline;
    border-radius: 6px;

    transition: border-color .3s ease;
    cursor: pointer;

    &:hover {
      border-color: darken($color-outline, 10);
    }
  }

  &-before, &-after {
    flex-shrink: 0;
    display: flex;
  }

  &-before {
    margin-right: 5px;
  }

  &-after {
    margin-left: 5px;
  }

  &-value {
    flex-grow: 1;
  }

  &-options {
    position: absolute;
    top: calc(100% + 5px);
    left: 0;
    z-index: 2;
    
    min-width: 100%;
    padding: 5px 0;

    background: #fff;
    border: 1px solid $color-outline;
    border-radius: 6px;

    overflow-y: auto;

    animation: slide-down .3s ease; 

    &-upper {
      top: unset;
      bottom: calc(100% + 5px);

      animation: slide-up .3s ease; 
    }
  }

  &-list {
    
    &-item {
      display: flex;
      align-items: center;
      
      height: 30px;
      padding: 0 10px;

      cursor: pointer;

      &:hover {
        background: #efefef;
      }
    }
  }

  &.ui-color {
    @each $colorName, $color in $colorMap {
      &-#{$colorName} {
        @include selectColor($color);
      }
    }
  }

  &.ui-size {
    &-1 {
      .ui-select-container {
        height: 24px;
      }
    }
    &-2 {
      .ui-select-container {
        height: 32px;
      }
    }
    &-3 {
      .ui-select-container {
        height: 40px;
      }
    }
    &-4 {
      .ui-select-container {
        height: 48px;
      }
    }
  }
}

@keyframes slide-up {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}

@keyframes slide-down {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
}
</style>