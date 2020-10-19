import hobbies from './data/hobbies'
import playlists from './data/playlists'

const fetch = (mockData, time = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockData)
    }, time)
  })
}

export default {
  fetchHobbies () {
    return fetch(hobbies, 500) // wait 0,5s before returning posts
  },
  fetchPlaylists () {
    return fetch(playlists, 500)
  }
}
