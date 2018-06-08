import React from 'react';
import Top from './top.js';
import Connect from './spotify-connection.js';
import Subscribe from './get-spotify.js';

class Home extends React.Component {
    render() {
        return (
            <div>
                <Top />
                <Connect />

                <p>
                    {document.cookie}
                </p>

                <Subscribe />
            </div>
        );
    }
}

export default Home;