import React from 'react'
import { Link } from 'react-router-dom'
import Layout from './Layout'
import UserInfo from './UserInfo'

const Results = (props) => {
  console.log(props)
  return (
    <Layout>
      <div className="columns" style={{ justifyContent: "center", marginBottom: '2rem' }}>
        <UserInfo header={props.user1.result} info={props.user1.info} score={props.user1.score} />
        <UserInfo header={props.user2.result} info={props.user2.info} score={props.user2.score} />
      </div>
      <Link to="/user1">
        <button className="button is-danger" style={{ marginLeft: '1rem', marginRight: '1rem' }}>Restart</button>
      </Link>
    </Layout>
  )
}

export default Results