import React, { Component } from 'react'
import Battle from '../components/Battle'
import Loading from '../components/Loading'
import helpers from '../utils/helpers'

class BattleContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { isLoading: true }
  }

  componentDidMount = () => {
    let query = this.context.router.route.location.query
    helpers.fetchInfo(query)
    .then((res) => {
      this.setState({
        isLoading: false,
        user1: res[0],
        user2: res[1]
      })
    })
  }

  handleInitiateBattle = () => {
    this.context.router.history.push({
      pathname: '/results',
      state: {
        user1: this.state.user1,
        user2: this.state.user2
      }
    }).bind(this)
  }

  render() {
    return this.state.isLoading === true
      ? <Loading />
      : <Battle
        onInitiateBattle={this.handleInitiateBattle}
        user1={this.state.user1}
        user2={this.state.user2}
      />
  }
}

BattleContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default BattleContainer