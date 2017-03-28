import React, { Component } from 'react';
import Layout from './Layout'

class GetUser extends Component {
  render() {
    return (
      <Layout>
        <h1 className="title">{this.props.header}</h1>
        <h5 className="subtitle is-5">Enter Twitter username</h5>
        <div className="field has-addons has-addons-centered">
          <p className="control">
            <input className="input" type="text" placeholder="Enter username" />
          </p>
          <p className="control">
            <a className="button is-success">
              Search
            </a>
          </p>
        </div>
      </Layout>
    );
  }
}

export default GetUser;
