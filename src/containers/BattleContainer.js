import React, { Component } from 'react'
import Battle from '../components/Battle'
import Loading from '../components/Loading'

class BattleContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { isLoading: true }
  }

  componentDidMount = () => {
    let query = this.context.router.route.location.query
    console.log(query)
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