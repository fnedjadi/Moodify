import React from 'react';

import Address from './address';
import Services from './service';
import About from './about';

import track from '../img/contact-track.jpg';

class Contact extends React.Component {
  render() {
    return (
      <div id='contact'>
      <img style={{margin:'0 5% 0 0'}} src={track} alt="Track "/>
        <div id= 'contact-content'>
          <About/>
          <Services/>
          <Address/>
        </div>
      </div>
    );
  }
}

export default Contact;