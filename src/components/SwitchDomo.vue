<template>
  <div>
    <Switch v-model:value="switchChecked"/>
  </div>
</template>

<script lang="ts">
import Switch from "../lib/Switch.vue";
import {ref} from "vue";

export default {
  components: {Switch},
  setup() {
    const switchChecked = ref(false);
    return {switchChecked: switchChecked};
  }
};
</script>