<template>
  <button v-bind="rest">
    <!--    使用v-bind 绑定属性，$attrs表示所有外部传进来的属性-->
    <slot/>
  </button>
</template>

<script lang="ts">
export default {
  inheritAttrs: false, //可以取消外部的默认绑定
  setup(props, context) {  //context.attrs 可以获取到外部传进来的属性
    const {attrs} = context;
    const {size, ...rest} = attrs;
    return {size, rest};
  }
};
</script>

<style lang="scss" scoped>

</style>