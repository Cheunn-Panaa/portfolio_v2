import hobbies from './dataset/hobbies'
import playlists from './dataset/playlists'
import experiences from './dataset/experiences'

const fetch = (mockData, time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData)
    }, time)
  })
}

export default {
  fetchHobbies() {
    return fetch(hobbies, 500) // wait 0,5s before returning posts
  },
  fetchPlaylists() {
    return fetch(playlists, 500)
  },
  fetchExperiences() {
    return fetch(experiences)
  },
}
