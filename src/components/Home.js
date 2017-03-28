import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Layout from './Layout'

class Home extends Component {
  render() {
    return (
        <Layout>
            <h1 className="title" style={{textAlign: 'center'}}>Twitter Battle</h1>
            <a className="button is-success">
                <Link to="/user1">Let's Go!</Link>
            </a>
        </Layout>
    );
  }
}

export default Home;
