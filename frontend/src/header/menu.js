import React from 'react';

class Menu extends React.Component {
  render() {
    return (
        <ul className="tabbed-primary-navigation">
            <li> <a className="navigation-tab" href="/"> Create </a> </li>
            <li> <a className="navigation-tab" href="/"> FAQ </a> </li>
            <li> <a className="navigation-tab" href="/"> Contact </a> </li>
            <li className="navigation-tab"> | </li>
            <li> <a className="navigation-tab" href="/"> Sign Up </a> </li>
        </ul>
    );
  }
}

export default Menu;