import React from 'react';

class Connect extends React.Component {
    render() {
        return(
            <div className='home-connect'>
                <div className='home-popup'>
                    <h4> Connect your Spotify account to start now </h4>
                    <a className='button-connect' href='http://localhost:8080/login'>Connect to Spotify</a>
                </div>
            </div>
        );
    }
}

export default Connect;
