<template>
  <button class="default-button"
          :class="{[`theme-${theme}`]:theme}"
  >
    <!--    使用v-bind 绑定属性，$attrs表示所有外部传进来的属性-->
    <slot/>
  </button>
</template>

<script lang="ts">
export default {
  props: {
    theme: {type: String, default: 'button'}
  }
};
</script>

<style lang="scss" scoped>
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
.default-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);

  & + & {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    color: $blue;
    border-color: $blue;
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }
}
</style>
