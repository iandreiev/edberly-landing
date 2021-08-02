<template>
  <footer class="footer">
      <div class="footer-links">
          <div class="footer-links-column">
              <btn-regular :btnClass="'btn-secondary btn-secondary--white'">
                  <span slot="btnText">Darmowy okres próbny</span>
              </btn-regular>
          </div>
          <div class="footer-links-column" v-for="i in footer" :key="i.id">
              <ul>
                  <p class="footer-list-title">{{i.title}}</p>
                  <router-link tag="a" :to="item.path" v-for="item in i.items" :key="item.id">{{item.title}}</router-link>
              </ul>
          </div>
      </div>
      <div class="footer-cc">
          <h1 class="footer-logo">edberly</h1>
          <p class="text-caption">
              © 2021 Edberly, LLC. All Rights Reserved. Edberly, the Edberly Logo are trademarks of Edberly, LLC.
          </p>
      </div>
  </footer>
</template>

<script>
import {mapState} from "vuex"
import btnRegular from '../btn/btn-regular.vue'

export default {
  components: { btnRegular },
    computed:{
        ...mapState(["footer"])
    }
}
</script>

<style>

</style>