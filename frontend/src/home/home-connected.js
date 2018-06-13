import React from 'react';

class Connected extends React.Component {
    render() {
        return(
            <div className='home-subscribe'>
                <h2 style={{padding: '20px 0'}}> Access to your Spotify account </h2>
                <a className='button-subscribe' target="_blank" rel="noopener noreferrer" href='https://www.spotify.com/us/account/overview/'> Account </a>
            </div>
        );
    }
}

export default Connected;