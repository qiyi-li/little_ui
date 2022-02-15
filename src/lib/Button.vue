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
    theme: {type: String, default: "button"}
  }
};
</script>

<style lang="scss" scoped>
&::-moz-focus-inner {
  border: 0;
}
&.theme-link{
  border-color: transparent;
  box-shadow: none;
  color: $blue;
  &:hover,&:focus{
    color: lighten($blue, 10%);
  }
}
&.theme-text{
  border-color: transparent;
  box-shadow: none;
  color: inherit;
  &:hover,&:focus{
    background: darken(white, 5%);;
  }
}
</style>