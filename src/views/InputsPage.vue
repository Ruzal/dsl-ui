<template>
  <div class="page page-inputs">
    <div class="ui-row">
      <div class="ui-col-12">
        <UIBlock>
          <div class="ui-row">
            <div class="ui-col-12">
              <h1>Inputs</h1>
            </div>
            <div class="ui-col-12">
              <div class="pre">
                <highlightjs language="html" code='import { UIInput } from "dsl-ui"'></highlightjs>
              </div>
            </div>
          </div>
        </UIBlock>
      </div>

      <div class="ui-col-12">
        <UIBlock>
          <div class="ui-row">
            <div class="ui-col-12">
              <h2>Colors</h2>
            </div>
            <div class="ui-col-12">
              <UIInput color="green"></UIInput>
              <UIInput class="ui-mt-15" color="red"></UIInput>
              <UIInput class="ui-mt-15" color="blue"></UIInput>
              <UIInput class="ui-mt-15" color="yellow"></UIInput>
              <UIInput class="ui-mt-15" color="purple"></UIInput>
            </div>
            <div class="ui-col-12">
              <highlightjs language="html" :code="InputColors"></highlightjs>
            </div>
          </div>
        </UIBlock>
      </div>

      <div class="ui-col-12">
        <UIBlock>
          <div class="ui-row">
            <div class="ui-col-12">
              <h2>Loading state</h2>
            </div>
            <div class="ui-col-12">
              <UIInput loading></UIInput>
              <UIInput class="ui-mt-15" color="green" loading></UIInput>
            </div>
            <div class="ui-col-12">
              <highlightjs language="html" :code="InputLoading"></highlightjs>
            </div>
          </div>
        </UIBlock>
      </div>

      <div class="ui-col-12">
        <UIBlock>
          <div class="ui-row">
            <div class="ui-col-12">
              <h2>Disabled</h2>
            </div>
            <div class="ui-col-12">
              <UIInput disabled></UIInput>
            </div>
            <div class="ui-col-12">
              <highlightjs language="html" :code="InputDisabled"></highlightjs>
            </div>
          </div>
        </UIBlock>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UIBlock, UIInput } from "dsl-ui";

const InputColors = `<UIInput color="green"></UIInput>
<UIInput color="red"></UIInput>
<UIInput color="blue"></UIInput>
<UIInput color="yellow"></UIInput>
<UIInput color="purple"></UIInput>`;

const InputLoading = `<UIInput loading></UIInput>
<UIInput color="green" loading></UIInput>`;

const InputDisabled = `<UIInput disabled></UIInput>`;
</script>

<style lang="scss">
.page-inputs {
  padding: 20px;
}
</style>
