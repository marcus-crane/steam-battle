import React from 'react';
import Layout from './Layout'

const GetUser = (props) => {
  return (
    <Layout>
      <h1 className="title">{props.header}</h1>
      <form onSubmit={props.onSubmitUser}>
        <div className="field has-addons has-addons-centered">
          <p className="control has-icon">
            <input
              className="input"
              onChange={props.onUpdateUser}
              value={props.username}
              type="text"
              placeholder="@twitter_handle"
            />
            <span className="icon is-small">
              <i className="fa fa-twitter"></i>
            </span>
          </p>
        </div>
        <div className="field has-addons has-addons-centered">
          <p className="control">
            <button className="button is-success" type="submit">
              Search
            </button>
          </p>
        </div>
      </form>
    </Layout>
  );
}

export default GetUser;
