import React from 'react';
import { Link } from 'react-router-dom'
import Layout from './Layout'
import UserInfo from './UserInfo'

const Battle = (props) => {
  return (
    <Layout>
      <h1 className="title">Confirm Participants</h1>
      <div className="columns" style={{ justifyContent: "center", marginBottom: '2rem' }}>
        <UserInfo header="Player 1" info={props.user1} />
        <UserInfo header="Player 2" info={props.user2} />
      </div>
      <Link to="/results">
        <button className="button is-success" style={button}>Fight!</button>
      </Link>
      <Link to="/user1">
        <button className="button is-danger" style={button}>Start Over?</button>
      </Link>
    </Layout>
  );
}

const button = { marginLeft: '1rem', marginRight: '1rem' }

export default Battle;
