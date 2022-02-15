<template>
  <div>
    <h3>示例1</h3>
    <Button>嘿嘿嘿</Button>
    <Button theme="button">嘿嘿嘿</Button>
    <Button theme="link">黄辉鸿</Button>
    <Button theme="text">黄辉鸿</Button>
  </div>
  <div>
    <Button size="big">大大大</Button>
    <Button>普普通</Button>
    <Button size="small">小小小</Button>
  </div>
  <div>
    <Button theme="link" size="big">大大大</Button>
    <Button theme="link">普普通</Button>
    <Button size="small" theme="link">小小小</Button>
  </div>
  <div>
    <Button size="big" theme="text">大大大</Button>
    <Button theme="text">普普通</Button>
    <Button size="small" theme="text">小小小</Button>
  </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue';

export default {
  components: {Button},
  setup() {
    const onClick = () => {console.log('click');};
    return {onClick};
  }
};
</script>
