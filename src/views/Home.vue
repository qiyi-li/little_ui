<template>
  <div class="topNavAndBanner">
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
import TopNav from '../components/TopNav.vue';

export default {
  components: {TopNav}
};
</script>

<style lang='scss' scoped>
$border-radius: 4px;
$color: #007c77;
.topNavAndBanner {
  background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
  //background: linear-gradient(104deg, rgba(216,226,223,1) 0%, rgba(238,216,202,1) 53%, rgba(236,213,222,1) 100%);

}

.banner {
  color: $color;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > .actions {
    padding: 8px 0;

    a {
      margin: 0 8px;
      background: #02bcb0;
      color: #fff;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;

      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
