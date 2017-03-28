import React from 'react';
import Nav from './Nav'

const Layout = (props) => {
  return (
    <section className="hero is-light is-fullheight">
      <Nav />
      <div className="hero-body">
        <div className="container has-text-centered">
          {props.children}
        </div>
      </div>
    </section>
  );
}

export default Layout;
