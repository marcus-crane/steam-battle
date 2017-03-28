import React from 'react'
import hrn from 'hrn'
import Item from './Item'

const UserInfo = (props) => {
  console.log(props)
  return (
    <nav className="level" style={{ display: 'block', marginLeft: '1.5rem', marginRight: '1.5rem' }}>
      {props.header && <h3 className="title is-3">{props.header}</h3>}
      <hr />
      {props.score && <h4 className="subtitle is-5">Score: {props.score}</h4>}
      <hr />
      <h5 className="subtitle is-5" style={{ marginBottom: '12px' }}>{props.info.name}</h5>
      <img src={props.info.profile_image_url_https} alt="User avatar" style={{ marginBottom: '12px' }} />
      <Item heading="Tweets" value={hrn(props.info.statuses_count)} />
      {props.info.verified && <Item heading="Verified" value="Whoa!" />}
      <Item heading="Followers" value={hrn(props.info.followers_count)} />
      <Item heading="Favourites" value={hrn(props.info.favourites_count)} />
      {/* 10 following parseInt is the radix. Check out https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/parseInt */}
      <Item heading="Account age" value={new Date().getFullYear() - parseInt(props.info.created_at.slice(-4), 10) + ' years'} />
    </nav>
  )
}

export default UserInfo