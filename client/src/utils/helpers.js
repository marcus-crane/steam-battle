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

  score += (user.followers_count * 5)
  score += (user.friends_count * 2)
  score += (user.favourites_count / 10)
  score += (user.statuses_count / 10)

  if (user.verified) {
    score += 100000
  }

  if (user.id === 96932207) {
    score = 9999999999
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
      let player1Score = parseInt(player[0].score, 10)
      let player2Score = parseInt(player[1].score, 10)

      if (player1Score < player2Score) {
        player[0].result = 'Loser'
        player[1].result = 'Winner'
      } else if (player1Score > player2Score) {
        player[0].result = 'Winner'
        player[1].result = 'Loser'
      } else {
        player[0].result = 'Tie'
        player[1].result = 'Tie'
      }

      return player
    })
  }
}

export default helpers