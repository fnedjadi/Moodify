import React from 'react';

// import SpotifyLogo from '../img/spotify-logo.png';
// <img className='spotify-logo' src={SpotifyLogo} alt="Spotify logo"/>

class Connect extends React.Component {
    onClickConnect(params) {
        console.log('Connect to Spotify account');
    }

    render() {
        return(
            <div className='home-connect'>
                <div className='home-popup'>
                    <h4> Connect your Spotify account to start now </h4>
                    <button className='button-connect' onClick={this.onClickConnect.bind(this)}>
                        Connect to Spotify
                    </button>
                </div>
            </div>
        );
    }
}

export default Connect;