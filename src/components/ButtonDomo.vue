<template>
  <div>
    <h3>示例1</h3>
    <Button>嘿嘿嘿</Button>
    <Button theme="button">嘿嘿嘿</Button>
    <Button theme="link">黄辉鸿</Button>
    <Button theme="text">黄辉鸿</Button>
  </div>
  <div>
    <h3>示例2</h3>
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
  </div>
  <div>
    <div>
      <h3>示例3</h3>
      <Button level="main">主要按钮</Button>
      <Button>普通按钮</Button>
      <Button level="danger">危险按钮</Button>
    </div>
    <div>
      <Button theme="link" level="main">主要链接按钮</Button>
      <Button theme="link">普通链接按钮</Button>
      <Button theme="link" level="danger">危险链接按钮</Button>
    </div>
    <div>
      <Button theme="text" level="main">主要文字按钮</Button>
      <Button theme="text">普通文字按钮</Button>
      <Button theme="text" level="danger">危险文字按钮</Button>
    </div>
  </div>

  <div>
    <h3>示例4</h3>
    <div>
      <Button disabled>禁用按钮</Button>
      <Button theme="link" disabled>禁用链接按钮</Button>
      <Button theme="text" disabled>禁用按钮</Button>
    </div>
  </div>
  <div>
    <h3>示例5</h3>
    <div>
        <Button loading>加载中</Button>
        <Button>加载完毕</Button>
    </div>
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
