<template>
  <router-view/>
</template>

<script lang="ts">

import {provide, ref} from 'vue';
import {router} from './router';

export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth;
    const asideVisible = ref(width > 500);
    provide('asideVisible', asideVisible); //set
    router.afterEach(() => {
      if(width<=500){
        console.log('fff')
        asideVisible.value = false;
      }
    });
  }
};
</script>
