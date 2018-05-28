import React from 'react';
import Menu from './menu.js';

import '../style.css'
import logo from '../img/white-logo.png'

class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <div className="container">
          <a href='/'> <img className='moodify-logo' src={logo} alt="Moodify logo"/> </a>
          <Menu/>
        </div>
      </div>
    );
  }
}

export default Header;