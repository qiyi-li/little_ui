<template>
  <div>Dialog示例</div>
  <h3>示例1</h3>
  <Button :onclick="toggle">toggle</Button>
  <Dialog :visible="dialogVisible" />
</template>
<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import {ref} from "vue";

export default {
  components: {Dialog, Button},
  setup() {
    const dialogVisible = ref(false);
    const toggle = () => {
      dialogVisible.value = !dialogVisible.value;
    };
    return {dialogVisible, toggle};
  }

};
</script>