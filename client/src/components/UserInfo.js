import React from 'react'
import hrn from 'hrn'
import Item from './Item'
import helpers from '../utils/helpers'

const UserInfo = (props) => {
  console.log(props)
  return (
    <nav className="level" style={{ display: 'block', paddingRight: '3rem' }}>
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