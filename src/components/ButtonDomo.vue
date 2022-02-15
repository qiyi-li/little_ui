<template>
  <div>
    <h3>示例1</h3>
    <Button>嘿嘿嘿</Button>
    <Button theme="button">嘿嘿嘿</Button>
    <Button theme="link">黄辉鸿</Button>
    <Button theme="text">黄辉鸿</Button>
  </div>
  <div>
    <h3>示例2 size</h3>
    <Button size="small">嘿嘿嘿</Button>
    <Button>嘿嘿嘿</Button>
    <Button size="big">黄辉鸿</Button>
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
