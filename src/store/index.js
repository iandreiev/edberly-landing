import Vue from 'vue'
import Vuex from 'vuex'

import {footer_nav, faq} from "./placeholder"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    footer: footer_nav,
    faq: faq,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
