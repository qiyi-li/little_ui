<template>
  <div>
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
    <div class="features">
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-Vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-typescript"></use>
          </svg>
          <h3>基于 TypeScript </h3>
          <p>源代码采用 TypeScript 书写</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-light"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
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
  //background: linear-gradient(145deg, rgba(227, 255, 253, 1) 0%, rgba(183, 233, 230, 1) 100%);
  background: linear-gradient(104deg, rgba(216,226,223,1) 0%, rgba(238,216,202,1) 53%, rgba(236,213,222,1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
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

.features {
  margin: 64px auto;
  padding: 0 16px;
  @media (min-width: 800px) {
    width: 800px;
    >ul{
      >li{
        width: 50%;
      }
    }
  }
  @media (min-width: 1200px) {
    width: 1200px;
    >ul{
      >li{
        width: 33.33333%;
      }
    }
  }

  > ul {
    display: flex;
    flex-wrap: wrap;

    > li {
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;

      > svg {
        grid-area: icon;
        width: 64px;
        height: 64px;
      }

      > h3 {
        grid-area: title;
        font-size: 28px;
      }

      > p {
        grid-area: text
      }
    }
  }
}
</style>
