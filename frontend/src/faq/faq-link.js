import React from 'react';
import link from '../img/link.png';

class Link extends React.Component {
  render() {
    return (
        <div className='faq-link'>
          <h2 style={{margin: '20px 20%'}}>Have questions? Our worldwide Community of expert fans can answer them. Have answers? Join the Community and help!</h2>
          <ul className='faq-list'>
            <li>
              <a className='faq-list-li' target="_blank" rel="noopener noreferrer" href="https://www.facebook.com"> 
                Facebook
                <img style={{margin:'0 0 0 10px'}}src={link} alt="Link Facebook"/>
              </a>
            </li>
            <li>
              <a className='faq-list-li' target="_blank" rel="noopener noreferrer" href="https://community.spotify.com"> 
                Spotify
                <img style={{margin:'0 0 0 10px'}}src={link} alt="Link Spotify"/>
              </a></li>
          </ul>
        </div>
    );
  }
}

export default Link;