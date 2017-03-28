import React, { Component } from 'react'
import GetUser from '../components/GetUser'

class GetUserContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { username: '' }
  }

  handleUpdateUser = (e) => {
    this.setState({ username: e.target.value })
  }

  handleSubmitUser = (e) => {
    let username = this.state.username.slice(1)
    let user1 = this.context.router.route.match.params.user1
    this.setState({ username: '' })

    e.preventDefault()
    if (user1) {
      this.context.router.history.push({
        pathname: '/battle',
        query: {
          user1,
          user2: username
        }
      })
    } else {
      this.context.router.history.push('/user2/' + username)
    }
  }

  render() {
    return (
      <GetUser
        onSubmitUser={this.handleSubmitUser}
        onUpdateUser={this.handleUpdateUser}
        header={this.props.header}
        username={this.state.username}
      />
    )
  }
}

GetUserContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default GetUserContainer