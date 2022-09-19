<template>
  <div class="page page-buttons">
    <div class="ui-row">
      <div class="ui-col-12">
        <UIBlock>
          <div class="ui-row">
            <div class="ui-col-12">
              <h1>Buttons</h1>
            </div>
            <div class="ui-col-12">
              <div class="pre">
                <highlightjs language="html" code='import { UIButton } from "dsl-ui"'></highlightjs>
              </div>
            </div>
          </div>
        </UIBlock>
      </div>

      <div class="ui-col-12">
        <UIBlock>
          <div class="ui-row">
            <div class="ui-col-12">
              <h2>Block</h2>
            </div>
            <div class="ui-col-12">
              <UIButton block>Block button</UIButton>
              <UIButton class="ui-mt-15" color="green" block>Block button</UIButton>
            </div>
            <div class="ui-col-12">
              <div class="pre">
                <highlightjs language="html" :autodetect="false" :code="ButtonBlock"></highlightjs>
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
              <UIButton color="green">Green</UIButton>
              <UIButton class="ui-ml-15" color="red">Red</UIButton>
              <UIButton class="ui-ml-15" color="blue">Blue</UIButton>
              <UIButton class="ui-ml-15" color="yellow">Yellow</UIButton>
              <UIButton class="ui-ml-15" color="purple">Purple</UIButton>
            </div>
            <div class="ui-col-12">
              <div class="pre">
                <highlightjs language="html" :autodetect="false" :code="ButtonColors"></highlightjs>
              </div>
            </div>
          </div>
        </UIBlock>
      </div>

      <div class="ui-col-12">
        <UIBlock>
          <div class="ui-row">
            <div class="ui-col-12">
              <h2>Outline colors</h2>
            </div>
            <div class="ui-col-12">
              <UIButton color="green" outline>Green</UIButton>
              <UIButton class="ui-ml-15" color="red" outline>Red</UIButton>
              <UIButton class="ui-ml-15" color="blue" outline>Blue</UIButton>
              <UIButton class="ui-ml-15" color="yellow" outline>Yellow</UIButton>
              <UIButton class="ui-ml-15" color="purple" outline>Purple</UIButton>
            </div>
            <div class="ui-col-12">
              <div class="pre">
                <highlightjs language="html" :autodetect="false" :code="ButtonOutlineColors"></highlightjs>
              </div>
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
              <UIButton color="red" loading>Red</UIButton>
              <UIButton class="ui-ml-15" color="green" outline loading>Green</UIButton>
            </div>
            <div class="ui-col-12">
              <div class="pre">
                <highlightjs language="html" :autodetect="false" :code="ButtonLoadingState"></highlightjs>
              </div>
            </div>
          </div>
        </UIBlock>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UIBlock, UIButton } from "dsl-ui";

const ButtonBlock = `<UIButton block>Block button</UIButton>
<UIButton color="green" block>Block button</UIButton>`;

const ButtonColors = `<UIButton color="green">Green</UIButton>
<UIButton color="red">Red</UIButton>
<UIButton color="blue">Blue</UIButton>
<UIButton color="yellow">Yellow</UIButton>
<UIButton color="purple">Purple</UIButton>
`;

const ButtonOutlineColors = `<UIButton color="green" outline>Green</UIButton>
<UIButton color="red" outline>Red</UIButton>
<UIButton color="blue" outline>Blue</UIButton>
<UIButton color="yellow" outline>Yellow</UIButton>
<UIButton color="purple" outline>Purple</UIButton>
`;

const ButtonLoadingState = `<UIButton color="red" loading>Red</UIButton>
<UIButton color="red" outline loading>Green</UIButton>
`;
</script>

<style lang="scss">
.page-buttons {
  padding: 20px;
}
</style>
