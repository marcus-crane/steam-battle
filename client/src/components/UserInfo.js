import React from 'react'

const UserInfo = (props) => {
  return (
    <div className="column">
      <p>{props.header}</p>
      <img src={props.info.profile_image_url} alt="User avatar"/>
      <p>{props.info.name}</p>
      {props.info.verified ? <p>Verified</p> : <p>Not Verified</p>}
      <p>Followers: {props.info.followers_count}</p>
      <p>Tweets: {props.info.statuses_count}</p>
      <p>Favourites: {props.info.favourites_count}</p>
    </div>
  )
}

export default UserInfo