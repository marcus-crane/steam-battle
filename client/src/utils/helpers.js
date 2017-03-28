import axios from 'axios'

const fetchUserInfo = (username) => {
  return axios.get('http://twitter.thingsima.de/api/' + username)
  .then((res) => {
    return res.data
  })
  .catch((err) => {
    console.warn('Error in fetchUserInfo', err)
  })
}

const helpers = {
  fetchInfo: function(players) {
    let user1 = fetchUserInfo(players.user1)
    let user2 = fetchUserInfo(players.user2)

    return axios.all([user1, user2])
    .catch((err) => {
      console.log('Error in fetchInfo', err)
    })
  }
}

export default helpers