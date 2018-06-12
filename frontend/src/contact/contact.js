import React from 'react';
import link from '../img/link.png';

class Contact extends React.Component {
  render() {
    return (
      <div id='contact'>
        <div id= 'contact-about'>
        <h1>About us</h1> 
          <p>
            With Moodify, it’s easy to find the right music for your right mood.
            There are millions of tracks on Spotify. So whether you’re excited, dreamy or cranky, the right music is always at your fingertips.
            Choose your moods and we will make you a playlist to listen to on your Spotify account.
            <br/>
            Soundtrack your life with Moodify.
          </p>

          <h1>Customer Service and Support</h1>
          <a className='contact-help' href="/faq">
            Help site
            <img style={{margin:'0 0 0 10px'}}src={link} alt="Link faq"/>
          </a> 
        </div>

        <div id= 'contact-adress'>
          <h1>Moodify HQ</h1>
          <address>
          <strong> Moodify-EPITA FR Inc </strong>
          <br/>
          14-16 Rue Voltaire
          <br/>
          6th Floor
          <br/>
          Le Kremlin-Bicêtre, 94270
          <br/>
          France
          </address>
        </div>
      </div>
    );
  }
}

export default Contact;