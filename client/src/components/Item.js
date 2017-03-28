import React from 'react'

const Item = (props) => {
  return (
    <div className="level-item has-text-centered" style={{ paddingBottom: '0.5rem' }}>
      <div>
        {props.heading && <p className="heading" style={{ marginBottom: '0' }}>{props.heading}</p>}
        <p className="title">{props.value}</p>
      </div>
    </div>
  )
}

export default Item