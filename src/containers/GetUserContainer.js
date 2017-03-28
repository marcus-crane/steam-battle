import React, { Component } from 'react'
import GetUser from '../components/GetUser'

class GetUserContainer extends Component {
  render() {
    return (
      <GetUser header={this.props.header} />
    )
  }
}

export default GetUserContainer