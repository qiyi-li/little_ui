<template>
  <div class="top-nav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-wheel"></use>
      </svg>
    </router-link>
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
    <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleAside">
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>
<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  props: {
    toggleMenuButtonVisible: {type: Boolean, default: false}
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible'); // get
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;  //取反
    };
    return {toggleAside};
  },
};
</script>
<style lang="scss" scoped>

.top-nav {
  color: #007c77;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  z-index: 1;

  > .logo {
    max-width: 6em;
    margin-right: auto;

    > svg {
      width: 32px;
      height: 32px;
    }
  }

  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;

    > li {
      margin: 0 1em;
    }
  }

  > .toggleAside {
    width: 32px;
    height: 32px;
    background-color: fade-out(black,0.95);
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;

  }

  @media(max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
