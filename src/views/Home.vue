<template>
  <div>
    <TopNav/>
    <div class="banner">
      <h1>little_ui</h1>
      <h2>一个ui框架</h2>
      <p class="actions">
        <a href="https://github.com/qiyi-li/little_ui.git">GitHub</a>
        <router-link to="/doc">Start</router-link>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";

export default {
  components: {TopNav}
};
</script>

<style lang='scss' scoped>
.banner {
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: lightgreen;

  > .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: #fff;
      display: inline-block;
      $h: 28px;
      height: $h;
      line-height: $h;
      border-radius: 14px;
      padding: 0 8px;
    }
  }
}
</style>