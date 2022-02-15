<template>
  <div>
    <h3>示例1</h3>
    <Button @click="onClick"
            @hover="onClick"
            @focus="onClick"
            size="small"
    >嘿嘿嘿
    </Button>
  </div>
</template>
<script lang="ts">
import Button from "../lib/Button.vue";

export default {
  components: {Button},
  setup() {
    const onClick = () => {console.log("click");};
    return {onClick};
  }
};
</script>