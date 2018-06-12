import React from 'react';

class Subscribe extends React.Component {
    render() {
        return(
            <div className='home-subscribe'>
                <h2> Still not on Spotify</h2>
                <p id='getspotify-text'>
                    Over 30 million tracks; thousands of curated playlists; 
                    Discover Weekly; Spotify Running; Radio; Chromecast, sound system, car, TV, and PlayStation integration; sharing and creating playlists with your friends... 
                    All of this is ready for you.
                </p>
                <a className='button-subscribe' target="_blank" rel="noopener noreferrer" href='https://www.spotify.com/signup/'>Get Spofity</a>
            </div>
        );
    }
}

export default Subscribe;