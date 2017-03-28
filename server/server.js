const Hapi = require('hapi')
const env = require('dotenv').config()
const Twitter = require('twitter')

const client = new Twitter({
  consumer_key: process.env.CONSUMER_KEY,
  consumer_secret: process.env.CONSUMER_SECRET,
  access_token_key: process.env.ACCESS_TOKEN_KEY,
  access_token_secret: process.env.ACCESS_TOKEN_SECRET
})

const server = new Hapi.Server()
server.connection({
  host: 'localhost',
  port: 8181
})

server.route({
  method: 'GET',
  path: '/',
  handler: ((request, reply) => {
    reply('Valid routes are /{twitter_handle}')
  })
})

server.route({
  method: 'GET',
  path: '/{handle}',
  handler: ((request, reply) => {
    client.get('users/show', { screen_name: request.params.handle }, (error, tweets, response) => {
      if (!error) {
        return reply(JSON.parse(response.body))
      }
    })
  })
})

server.start((err) => {
  if (err) { throw err }
  console.log('Server running at:', server.info.uri)
})
