<template>
  <div>Dialog示例</div>
  <h3>示例1</h3>
  <Button :onclick="toggle">toggle</Button>
  <Dialog v-model:visible="dialogVisible"
          :closeOnClickOverlay="false"
          :ok="f1"
          :cancel="f2"
          title="标题"
  >
    <template v-slot:title>
      <strong>标题内容</strong>
    </template>

    <template v-slot:content>
      <strong>strong</strong>
      <div>content1</div>
    </template>
  </Dialog>
</template>
<script lang="ts">
import Dialog from '../lib/Dialog.vue';
import Button from '../lib/Button.vue';
import {ref} from 'vue';

export default {
  components: {Dialog, Button},
  setup() {
    const dialogVisible = ref(false);
    const toggle = () => {
      dialogVisible.value = !dialogVisible.value;
    };
    const f1 = () => {
      console.log('f1');
    };
    const f2 = () => {
      console.log('f2');
    };
    return {dialogVisible, toggle, f1, f2};
  }

};
</script>
