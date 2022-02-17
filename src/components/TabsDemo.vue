<template>
  <div>
    Tabs示例
  </div>
  <h3>示例1</h3>
  <Tabs v-model:selected="x">
    <Tab title="导航1">tab1</Tab>
    <Tab title="导航2">tab2</Tab>
  </Tabs>
</template>
<script lang="ts">
import Tabs from '../lib/Tabs.vue';
import Tab from '../lib/Tab.vue';
import {ref} from 'vue';

export default {
  components: {Tabs, Tab},
  setup(){
    const x= ref('导航1')
    return {x}

  }
};
</script>
