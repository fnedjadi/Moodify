import React from 'react';
import Top from './top.js';
import Connect from './spotify-connection.js';
import Subscribe from './get-spotify.js';
//import cookie from 'react-cookies';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Top />
                <Connect />
                <Subscribe />
            </div>
        );
    }
}
export default Home;