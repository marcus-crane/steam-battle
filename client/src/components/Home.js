import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Layout from './Layout'

class Home extends Component {
  render() {
    return (
      <Layout>
        <h1 className="title" style={{textAlign: 'center'}}>Twitter Battle</h1>
        <Link to="/user1">
          <button className="button is-success">Let's Go!</button>
        </Link>
      </Layout>
    );
  }
}

export default Home;
