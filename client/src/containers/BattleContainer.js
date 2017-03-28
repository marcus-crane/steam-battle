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
    helpers.fetchInfo(query.user1, query.user2)
    .then((res) => {
      console.log(res)
    })
  }

  render() {
    return this.state.isLoading === true
      ? <Loading />
      : <Battle
        user1="@sentreh"
        user2="@captainwabbit"
      />
  }
}

BattleContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default BattleContainer