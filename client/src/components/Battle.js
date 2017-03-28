import React from 'react';
import Layout from './Layout'
import UserInfo from './UserInfo'

const Battle = (props) => {
  console.log('battle props', props)
  return (
    <Layout>
      <h1 className="title">Confirm Participants</h1>
        <div className="columns" style={{ justifyContent: "center" }}>
          <UserInfo header="Player 1" info={props.user1} />
          <UserInfo header="Player 2" info={props.user2} />
      </div>
    </Layout>
  );
}

export default Battle;
