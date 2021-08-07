<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import {JellyScroll} from "jelly-scroll"

export default {
  mounted(){
    JellyScroll('app',{
    friction: .6, // recommended .5, sets jelly friction
    strength: 150 // recommended 100, sets jelly strenght
})
  }
}
</script>

<style>

</style>