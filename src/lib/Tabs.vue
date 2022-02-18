<template>
  <div class="lu-tabs">
    <div class="lu-tabs-nav" ref="container">
      <div class="lu-tabs-nav-item" :class="{selected:t===selected}" @click="select(t)"
           v-for="(t,index) in titles"
           :ref="el=>{if(t===selected) selectedItem=el}"
           :key="index">
        {{ t }}
      </div>
      <div ref="indicator" class="lu-tabs-nav-indicator"></div>
    </div>
    <div class="lu-tabs-content">
      <component class="lu-tabs-content-item" :class="{selected:c.props.title===selected}" v-for="(c,index) in defaults"
                 :is="c" :key="index"/>
    </div>
  </div>
</template>

<script lang="ts">
import Tab from './Tab.vue';
import {onMounted, onUpdated, ref} from 'vue';

export default {
  props: {
    selected: {type: String}
  },
  setup(props, context) {
    const selectedItem = ref<HTMLMediaElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);//nav的container
    const x = () => {
      const {width} = selectedItem.value.getBoundingClientRect();
      indicator.value.style.width = width + 'px';
      const {left: left1} = container.value.getBoundingClientRect();
      const {left: left2} = selectedItem.value.getBoundingClientRect();
      const left = left2 - left1;
      indicator.value.style.left = left + 'px'; //设置下划线的left
    };

    onMounted(x);

    onUpdated(x);

    const defaults = context.slots.default();
    defaults.forEach((tab) => {
      if (tab.type !== Tab) {
        throw new Error('Tabs内子标签必须是Tab');
      }
    });
    const titles = defaults.map(tab => {
      return tab.props.title;
    });
    const select = (title: string) => {
      context.emit('update:selected', title);
    };
    return {defaults, titles, select, selectedItem, indicator, container};
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
    position: relative;
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

    &-indicator {
      position: absolute;
      height: 3px;
      background-color: $blue;
      left: 0;
      bottom: -1px;
      transition: all 250ms;
    }
  }

  &-content {
    padding: 8px 0;

    &-item {
      display: none;

      &.selected {
        display: block;
      }
    }
  }
}
</style>
