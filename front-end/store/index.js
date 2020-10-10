// import Vue from 'vue'
// import Vuex from 'vuex'
 import client from '../mock/index.js';
//
// Vue.use(Vuex)
//
// const createStore = () => new Vuex.Store({
//   state: {
//     hobbies: []
//   },
//
//   mutations: {
//     setHobbies (state, hobbies) {
//       state.hobbies = hobbies
//     }
//   },
//
//   actions: {
//     fetchHobbies ({ commit }) {
//       return client
//         .fetchHobbies()
//         .then(hobbies => commit('setHobbies', hobbies))
//     }
//   }
// })
// export default createStore
const initialState = () => ({
  hobbies: []
})

export const state = initialState;

export const mutations = {
  setHobbies(state, hobbies) {
    state.hobbies = hobbies
  }
};

export const actions = {
  nuxtServerInit({commit}) {
    return client.fetchHobbies()
      .then(hobbies => commit('setHobbies', hobbies))
  }
};
