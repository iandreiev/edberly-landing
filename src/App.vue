<template>
  <div id="app">
    <navbarRegular />
    <div id="jelly">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import navbarRegular from "./components/navbar/navbar-regular.vue";

export default {
  components: { navbarRegular },
  mounted() {

  },
};
</script>

<style>
</style>