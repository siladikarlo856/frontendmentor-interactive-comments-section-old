<template>
  <header>
    <!-- There is not header in this app but this will stay as a placeholder. -->
  </header>

  <main>
    <Comments />
  </main>
</template>

<script lang="ts">
import Comments from "@/components/Comments.vue";

export default {
  components: {
    Comments,
  },
};
</script>

<style>
@import "./assets/base.css";
#app {
  margin: 0 auto;
}

body {
  display: flex;
  place-items: center;
}
</style>
