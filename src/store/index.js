import Vue from 'vue'
import Vuex from 'vuex'

import {footer_nav, faq, howto, themes, subscription} from "./placeholder"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    footer: footer_nav,
    faq: faq,
    howto,
    themes,
    subscription
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
