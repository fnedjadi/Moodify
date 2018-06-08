import React from 'react';

class Menu extends React.Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <ul className="tabbed-primary-navigation">
            <li> <a className="navigation-tab" href="/create"> Create </a> </li>
            <li> <a className="navigation-tab" href="/faq"> FAQ </a> </li>
            <li> <a className="navigation-tab" href="/contact"> Contact </a> </li>
            <li className="navigation-tab"> | </li>
            <li> <a className="navigation-tab" href="http://localhost:8080/login"> Sign in </a> </li>
        </ul>
    );
  }
}

export default Menu;