<template>
  <div class="navbar" :class="{'navbar-fixed': changeNav == true}">
          <div class="navbar-logo"></div>
          <div class="navbar-items">
              <div class="navbar-items-item" v-for="i in nav" :key="i.id">
                  <p>{{i.name}}</p>
              </div>
          </div>
          <div class="navbar-cta">
              <btn-regular :btnClass="'btn-outline btn-outline--regular'">
                  <p class="btn-text" slot="btnText">Wybierz kurs</p>
              </btn-regular>
          </div>
  </div>
</template>

<script>
import {nav} from "../../store/placeholder"
import btnRegular from '../btn/btn-regular.vue'
export default {
  components: { btnRegular },
    data(){
        return{
            nav,
            changeNav: false
        }
    },
    methods:{
            headerOnScroll() {
                document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ? this.changeNav = true :
                this.changeNav = false
    },
    },
    mounted(){
        window.onscroll = () => {
      this.headerOnScroll();
    };
    }
}
</script>

<style>

</style>