// import Vue from 'vue'
// import Vuex from 'vuex'
import client from '../mock/index.js'
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
  playlists: [],
  experiences: [],
})

export const state = initialState
export const getters = {
  getPlaylists: (state) => {
    return state.playlists
  },
  getExperiences: (state) => {
    return state.experiences
  },
}
export const mutations = {
  setHobbies(state, hobbies) {
    state.hobbies = hobbies
  },
  setPlaylists(state, playlists) {
    state.playlists = playlists
  },
  setExperiences(state, experiences) {
    state.experiences = experiences
  },
}

export const actions = {
  nuxtServerInit({ commit }) {
    return client
      .fetchHobbies()
      .then((hobbies) => commit('setHobbies', hobbies))
  },
  loadPlaylists({ commit }) {
    return client
      .fetchPlaylists()
      .then((playlists) => commit('setPlaylists', playlists))
  },
  loadExperiences({ commit }) {
    return client
      .fetchExperiences()
      .then((experiences) => commit('setExperiences', experiences))
  },
}
