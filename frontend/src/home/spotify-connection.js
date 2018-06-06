import React from 'react';

// import SpotifyLogo from '../img/spotify-logo.png';
// <img className='spotify-logo' src={SpotifyLogo} alt="Spotify logo"/>


class Connect extends React.Component {
    render() {
        return(
            <div className='home-connect'>
                <div className='home-popup'>
                    <h4> Connect your Spotify account to start now </h4>
                    <a className='button-connect' target="_blank" rel="noopener noreferrer" href='/signup'>Connect to Spotify</a>
                </div>
            </div>
        );
    }
}

export default Connect;