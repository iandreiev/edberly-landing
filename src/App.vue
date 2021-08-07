<template>
  <div id="app">
    <navbarRegular/>
    <router-view id="jelly"></router-view>
  </div>
</template>

<script>

import {JellyScroll} from "jelly-scroll"
import navbarRegular from './components/navbar/navbar-regular.vue'

export default {
  components: { navbarRegular },
  mounted(){
    JellyScroll('jelly',{
    friction: 1, // recommended .5, sets jelly friction
    strength:250 // recommended 100, sets jelly strenght
})
  }
}
</script>

<style>

</style>