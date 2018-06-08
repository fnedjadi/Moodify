import React from 'react';
import cookie from 'react-cookies';

class FAQ extends React.Component {
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
      console.log("responded");
      console.log(response);
      console.log("responded");

      this.setState({
        userData: response
      })
    })
  }


  render() {
    return (
      <div id='faq'>
        <h1>Ask the Community</h1>
        <h2>Have questions? Our worldwide Community of expert fans can answer them. Have answers? Join the Community and help!</h2>
        <ul>
          <li><a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com"> Facebook </a></li>
          <li><a target="_blank" rel="noopener noreferrer" href="https://community.spotify.com"> Spotify </a></li>
        </ul>
        <p>
          {document.cookie}
        </p>
        <h2>{this.state.userData ? this.state.userData.email : null}</h2>
      </div>
    );
  }
}

export default FAQ;