import React from 'react';
import { Link } from 'react-router-dom'
import Layout from './Layout'
import UserInfo from './UserInfo'

const button = { marginLeft: '1rem', marginRight: '1rem' }

const Battle = (props) => {
  return (
    <Layout>
      <h1 className="title">Confirm Participants</h1>
      <div className="columns" style={{ justifyContent: "center", marginBottom: '2rem' }}>
        <UserInfo info={props.user1} />
        <UserInfo info={props.user2} />
      </div>
      <Link to="/results" onClick={props.onInitiateBattle}>
        <button className="button is-success" style={button}>Fight!</button>
      </Link>
      <Link to="/user1">
        <button className="button is-danger" style={button}>Start Over?</button>
      </Link>
    </Layout>
  );
}



export default Battle;
