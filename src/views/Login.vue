<template>
  <div id="auth" class="auth-page">
      <div class="auth-illustration auth-illustration-linen">
          <div class="auth-illustration-logo" >
            <div @click="passRouter()" class="navbar-logo"></div>
          </div>
          <div class="auth-illustration-text">
              <cta-iconery :icons="icons.auth" :name="'auth'">
                   <div id="content" slot="content" class="auth-illustration-text-content">
      <h2>Przygotuj się na 100% do matury</h2>
        </div>
                </cta-iconery>
          </div>
      </div>
      <div class="auth-container">
          <h2>Log in</h2>
          <input-regular :placeholder="'Email'" :type="'email'" :name="'email'" v-model="form.email" />
          <input-regular :placeholder="'Password'" :type="'password'" :name="'password'" v-model="form.password" />
         <btn-regular :btnClass="'btn-default btn-default--info'">
            <span slot="btnText">Login</span>
          </btn-regular>
          <div class="auth-subcontainer">
              <p>Don’t have an account?</p>
          <router-link to="/register">Register</router-link>
          </div>
      </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BtnRegular from '../components/btn/btn-regular.vue'
import CtaIconery from '../components/cta/cta-iconery.vue'
import inputRegular from '../components/input/input-regular.vue'


export default {
  components: { inputRegular, BtnRegular, CtaIconery },
    data(){
        return{
            form:{
                name: '',
                email: '',
                phone: '',
                password: ''
            },
        }
    },
    computed:{
        ...mapState(["icons"])
    },
    methods:{
        passRouter(){
            this.$router.push({name: 'Home'})
        }
    }
}
</script>

<style>

</style>