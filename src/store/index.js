import Vue from 'vue'
import Vuex from 'vuex'

import {footer_nav, faq, howto, themes, subscription} from "./placeholder"
import {nauka, grosze, authpage} from "./icons"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    footer: footer_nav,
    faq: faq,
    howto,
    themes,
    subscription,
    icons:{
      nauka: nauka,
      grosze: grosze,
      auth: authpage
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
