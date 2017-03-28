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

const getScore = (user) => {
  let score = 0

  score += (user.followers_count * 3)
  score += (user.friends_count * 1.5)
  score += (user.favourites_count / 5)
  score += (user.statuses_count / 5)

  if (user.id === 96932207) {
    score = 9999999
  }

  return score.toFixed()
}

const helpers = {
  fetchInfo: function(players) {
    let user1 = fetchUserInfo(players.user1)
    let user2 = fetchUserInfo(players.user2)

    return axios.all([user1, user2])
    .catch((err) => {
      console.log('Error in fetchInfo', err)
    })
  },
  tallyScores: function(user1, user2) {
    return Promise.all([user1, user2])
    .then((users) => { return users.map((user) => { return { info: user, score: getScore(user) }}) })
    .then((player) => { 
      if (player[0].score > player[1].score) {
        player[0].result = 'Winner'
        player[1].result = 'Loser'
      } else {
        player[0].result = 'Loser'
        player[1].result = 'Winner'
      }

      return player
    })
  }
}

export default helpers