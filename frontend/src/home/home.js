import React from 'react'

import SpotifyLogo from '../img/spotify-logo.png'

class Home extends React.Component {
    render() {
        return(
            <div>
                <h1>Turn your current mood into a personal music playlist!</h1>
                <p>
                    Moodify creates smart and unique playlists by coupling your emotions to your musical toastes.
                    Tell how feel and we will create an appropriate playlist just for you.
                    Start listening to your musical feeling right now and discover your current matching songs!
                </p>
                <div className='pop-up'>
                    Connect your Spotify account to start now
                    <button className='button-connect'><img className='spotify-logo' src={SpotifyLogo} alt="Spotify logo"/> Connect </button>
                </div>
            </div>
        );
    }
}

export default Home;