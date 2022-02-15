<template>
  <div>
    <button class="lu-switch" @click="toggle" :class="{'lu-checked':value}"><span></span></button>
    <div>{{ value }}</div>
  </div>
</template>

<script lang="ts">
import {ref} from 'vue';

export default {
  props: {
    value: Boolean
  },
  setup(props, context) {
    const checked = ref(false);
    const toggle = () => {
      // checked.value = !checked.value;
      context.emit('update:value', !props.value);
    };
    return {checked, toggle};
  }
};
</script>

<style lang="scss">

$h: 22px;
$h2: $h - 4px;
.lu-switch {
  height: $h;
  width: $h*2;
  border: none;
  background: grey;
  border-radius: calc(#{$h} / 2);
  position: relative;

  span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: calc(#{$h} / 2);
    transition: all 250ms;
  }

  &:focus {
    outline: none;
  }

  &:active {
    > span {
      width: $h2 + 4px;
    }
  }

  &.lu-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }

  &.lu-checked {
    background-color: cornflowerblue;

    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
}

</style>
