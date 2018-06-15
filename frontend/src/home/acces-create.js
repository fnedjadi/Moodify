import React from 'react';

class HomeCreate extends React.Component {
    render() {
        return(
            <div className='home-subscribe'>
                <h2> Start the experience </h2>
                <p id='getspotify-text'>
                    Tell us your current mood and enjoy the playlist on your spotify account.
                </p>
                <a className='button-subscribe' href='/create'>Create</a>
            </div>
        );
    }
}

export default HomeCreate;
