import React from 'react';
import link from '../img/link.png';

class Services extends React.Component {
  render() {
    return (
      <div >
        <h1>Customer Service and Support</h1>
        <a className='contact-help' href="/faq">
        Help site
        <img style={{margin:'0 0 0 10px'}} src={link} alt="Link faq"/>
        </a> 
      </div>
    );
  }
}

export default Services;