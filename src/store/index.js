import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    products: [{ name: 'P1', show: true }, { name: 'P2', show: false }, { name: 'P3', show: true }]
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    incrementAsync (context) {
      setTimeout(() => {
        context.commit('increment')
      }, 1000)
    }
  },
  modules: {
  },
  getters: {
    filteredProducts (state) {
      return state.products.filter(product => product.show)
    }
  }
})
