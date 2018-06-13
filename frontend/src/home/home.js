import React from 'react';
import Top from './top.js';
import Connect from './spotify-connection.js';
import Subscribe from './get-spotify.js';
import cookie from 'react-cookies';
import Connected from './home-connected.js';

class Home extends React.Component {
    getUserHome() {
        if (cookie.load('spotify_access_token')) {
            return (
                <Connected/>
            );
        } else {
            return (
                <div>
                    <Connect />
                    <Subscribe />
                </div>
            );
        }
    }

    render() {
        const userHome = this.getUserHome();
        return (
            <div>
                <Top />
                {userHome}
            </div>
        );
    }
}
export default Home;