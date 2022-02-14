<template>
  <div class="top-nav">
    <div class="logo" @click="toggleAside">logo</div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggleAside"></span>
  </div>
</template>
<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible'); // get
    const toggleAside = ()=>{
      asideVisible.value =!asideVisible.value  //取反
    }
    return {toggleAside}
  },
};
</script>
<style lang="scss" scoped>
.top-nav {
  background: pink;
  display: flex;
  padding: 16px;
  position: relative;
  justify-content: center;
  align-items: center;
  z-index: 1;

  > .logo {
    max-width: 6em;
    margin-right: auto;
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }
  >.toggleAside{

  }
  @media(max-width: 500px){
    >.menu {display: none;}
    >.logo {margin:0 auto}
  }
}
</style>
