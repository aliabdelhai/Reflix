import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import '../styles/landing.css'

class Landing extends Component {
    constructor() {
        super()
        this.state = {
            users: [
                { name: 'Omneya', color: 'blue' },
                { name: 'Shahd', color: 'red' },
                { name: 'Ali', color: 'green' },
                { name: 'Tamir', color: 'yellow' },
                { name: 'Dania', color: 'pink' },
            ]
        }
    }

    render() {
        let state = this.state
        return (
            <div>
                <h1 id="home-title">WHO'S WATCHING?</h1>
                <div id="users">
                    {state.users.map(u => {
                        return (
                            <div className={u.color}>
                                <Link to='/catalog' key={u.name}><div className="user">{u.name}</div></Link>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
}

export default Landing;