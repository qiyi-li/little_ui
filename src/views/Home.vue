<template>
  <div>

    <div class="top-nav">
      <div class="logo">logo</div>
      <ul class="menu">
        <li>菜单1</li>
        <li>菜单2</li>
      </ul>
    </div>
    <div class="banner"></div>
    <h1>little_ui</h1>
    <h2>一个ui框架</h2>
    <p class="action">
      <a href="">GitHub</a>
      <a href="">Start</a>
    </p>
  </div>
</template>
<style lang='scss' scoped>
.top-nav {
  background: pink;
  display: flex;
  padding: 16px;
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
}

</style>