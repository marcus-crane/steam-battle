import React from 'react';
import Layout from './Layout'

const Battle = (props) => {
  return (
    <Layout>
      <h1 className="title">Confirm Participants</h1>
      <p>User1: {props.user1}</p>
      <p>User2: {props.user2}</p>
    </Layout>
  );
}

export default Battle;
