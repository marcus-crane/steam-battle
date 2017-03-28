import React from 'react'

const Nav = () => {
    return (
        <div className="hero-head">
            <header className="nav">
                <div className="container">
                    <div className="nav-left">
                        <a className="nav-item" href="/">
                            Steam Battle
                        </a>
                    </div>

                    <div className="nav-right">
                        <a className="nav-item" href="https://github.com/marcus-crane/steam-battle" target="_blank" rel="noreferrer">
                            <span className="icon">
                                <i className="fa fa-github"></i>
                            </span>
                        </a>
                        <a className="nav-item" href="https://twitter.com/sentreh" target="_blank" rel="noreferrer">
                            <span className="icon">
                                <i className="fa fa-twitter"></i>
                            </span>
                        </a>
                    </div>
                    
                </div>
            </header>
        </div>
    )
}

export default Nav