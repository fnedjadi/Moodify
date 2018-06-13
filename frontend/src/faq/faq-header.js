import React from 'react';
import chat from '../img/chat.png';
import spotify from '../img/spotify-faq.png';
import bulb from '../img/bulb.png';

class FAQHeader extends React.Component {
  render() {
    return (
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
    );
  }
}

export default FAQHeader;