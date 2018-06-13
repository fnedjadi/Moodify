import React from 'react';
import cookie from 'react-cookies';

class Menu extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      userData: null
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/userInfo?access_token=' + cookie.load('spotify_access_token') )
    .then(response => response.json())
    .then(response => {

      if (!response.error) {
        this.setState({
          userData: response
        })
      }
    })
  }

  getUserNavLink() {
    if (this.state.userData) {
      return (<li> <a className="navigation-tab" href="http://localhost:8080/logout">Logout ({this.state.userData.email})</a></li>);
    }
    else {
      return (<li> <a className="navigation-tab" href="http://localhost:8080/login"> Sign in </a> </li>);
    }
  }

  render() {
    const userNavLink = this.getUserNavLink();
    return (
        <ul className="tabbed-primary-navigation">
            <li> <a className="navigation-tab" href="/create"> Create </a> </li>
            <li> <a className="navigation-tab" href="/faq"> FAQ </a> </li>
            <li> <a className="navigation-tab" href="/contact"> Contact </a> </li>
            <li className="navigation-tab"> | </li>
            {userNavLink}
        </ul>
    );
  }
}

export default Menu;