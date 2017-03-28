import got from 'got'

const fetchUserInfo = (username) => {
  return got.get('http://localhost:8181')
  .then((res) => {
    return res.body
  })
  .catch((err) => {
    console.warn('Error in fetchUserInfo', err)
  })
}

const helpers = {
  fetchInfo: function(player1, player2) {
    return fetchUserInfo(player1)
  }
}

export default helpers