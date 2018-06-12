import React from 'react';

import chat from '../img/chat.png';
import spotify from '../img/spotify-faq.png';
import bulb from '../img/bulb.png';
import link from '../img/link.png';

class FAQ extends React.Component {
  render() {
    return (
      <div id='faq'>
        <div className='faq-top'>
          <h1 id='faq-title'>Ask the Community</h1>
          <ul className='faq-logos'>
              <li> 
                <img className='faq-logo-li' src={chat} alt="Chat faq logo"/> 
                <h4> Help </h4>
              </li>
              <li> 
                <img className='faq-logo-li' src={spotify} alt="Spootify faq logo"/>
                <h4> Music chat </h4>
              </li>
              <li>
                <img className='faq-logo-li' src={bulb} alt="Bulb faq logo"/>
                <h4> Ideas </h4>
              </li>
          </ul>
        </div>
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
      </div>
    );
  }
}

export default FAQ;