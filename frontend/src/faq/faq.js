import React from 'react';

class FAQ extends React.Component {

  constructor() {
    super()
    this.state = {
      userData: "toto"
    }
  }

  componentDidMount() {


    fetch('http://localhost:8080/userInfo')
    .then(response => response.json())
    .then(response => {
      console.log("responded");
      console.log(response);
      console.log("responded");

      this.setState({
        userData: response.body
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

        <h2>{this.state.userData.email}</h2>
      </div>
    );
  }
}

export default FAQ;