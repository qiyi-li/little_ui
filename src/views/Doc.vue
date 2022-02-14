<template>
  <div>
    <TopNav/>
    <div class="content">
      <aside>
        边栏
      </aside>
      <main>
        main
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import TopNav from "../components/TopNav";

export default {
  components: {TopNav}
};
</script>