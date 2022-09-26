<template>
  <div class="app">
    <div class="app-header">
      <UIHeader>
        <UILogo>dsl UI</UILogo>
        <UIMenu class="ui-ml-20">
          <UIMenuItem>Главная</UIMenuItem>
          <UIMenuItem>Github</UIMenuItem>
        </UIMenu>
      </UIHeader>
    </div>
    <div class="app-wrapper">
      <div class="app-sidebar">
        <UISidebar>
          <UISidebarMenu title="Form">
            <UISidebarMenuItem
              :icon="mdiButtonCursor"
              @click.prevent="$router.push('buttons')"
              :active="$route.name == 'buttons'"
              >Button</UISidebarMenuItem
            >
            <UISidebarMenuItem
              :icon="mdiFormTextbox"
              @click.prevent="$router.push('inputs')"
              :active="$route.name == 'inputs'"
              >Input</UISidebarMenuItem
            >
            <UISidebarMenuItem :icon="mdiFormSelect">Select</UISidebarMenuItem>
          </UISidebarMenu>
        </UISidebar>
      </div>
      <div class="app-content">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";

import { UIHeader, UILogo, UIMenu, UIMenuItem, UISidebar, UISidebarMenu, UISidebarMenuItem } from "dsl-ui";

import { mdiButtonCursor, mdiFormSelect, mdiFormTextbox } from "@mdi/js";
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

html,
body,
#app,
.app {
  width: 100%;
  height: 100vh;
}

body {
  background: #f7f8fa;
  font-size: 14px;
  font-family: "Ubuntu", sans-serif;
  -webkit-font-smoothing: antialiased;
}

.app {
  display: flex;
  flex-direction: column;

  &-wrapper {
    flex-grow: 1;
    display: flex;
  }

  &-sidebar {
    flex-shrink: 0;
  }

  &-content {
    flex-grow: 1;
  }
}

.pre {
  border-radius: 6px;
  overflow: hidden;
}
</style>
