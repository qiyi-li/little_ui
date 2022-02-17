<template>
  <div class="lu-tabs">
    <div class="lu-tabs-nav">
      <div class="lu-tabs-nav-item" :class="{selected:t===selected}" v-for="(t,index) in titles" :key="index">
        {{ t }}
      </div>
    </div>
    <div class="lu-tabs-content">
      <component class="lu-tabs-content-item" v-for="(c,index) in defaults" :is="c" :key="index"/>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";

export default {
  props: {
    selected: {type: String}
  },
  setup(props, context) {
    const defaults = context.slots.default();
    defaults.forEach((tab) => {
      if (tab.type !== Tab) {
        throw new Error("Tabs内子标签必须是Tab");
      }
    });
    const titles = defaults.map(tab => {
      return tab.props.title;
    });
    return {defaults, titles};
  }
};
</script>

<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.lu-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;

    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }

      &.selected {
        color: $blue;
      }
    }
  }

  &-content {
    padding: 8px 0;
  }
}
</style>