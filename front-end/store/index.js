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
  hobbies: [],
  playlists: []
})

export const state = initialState;
export const getters = {
  getPlaylists: (state) => {
    return state.playlists
  }
}
export const mutations = {
  setHobbies(state, hobbies) {
    state.hobbies = hobbies
  },
  setPlaylists(state, playlists) {
    state.playlists = playlists
  }
};

export const actions = {
  nuxtServerInit({commit}) {
    return client.fetchHobbies()
      .then(hobbies => commit('setHobbies', hobbies))
  },
  loadPlaylists({commit}) {
    return client.fetchPlaylists()
      .then(playlists => commit('setPlaylists', playlists))
  }
};
