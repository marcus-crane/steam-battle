import React, { Component } from 'react'
import Loading from '../components/Loading'
import Results from '../components/Results'
import helpers from '../utils/helpers'

class ResultsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      user1: this.props.location.state.user1,
      user2: this.props.location.state.user2,
    }
  }

  componentDidMount = () => {
    helpers.tallyScores(this.state.user1, this.state.user2)
    .then((res) => {
      this.setState({
        isLoading: false, 
        user1: res[0],
        user2: res[1]
      })
    })
  }

  render() {
    return(
      this.state.isLoading === true
      ? <Loading />
      : <Results
          user1={this.state.user1}
          user2={this.state.user2}
        />
    )
  }
}

export default ResultsContainer