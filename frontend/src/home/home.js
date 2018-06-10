import React from 'react';
import Top from './top.js';
import Connect from './spotify-connection.js';
import Subscribe from './get-spotify.js';
import cookie from 'react-cookies';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            testData: null
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/moods/playlist?access_token=' + cookie.load('spotify_access_token') + '&mood1=calm')
            //.then(response => response.json())
            .then(response => {
                console.log("responded");
                console.log(response);
                console.log("responded");

                this.setState({
                    testData: response
                })
            })
    }

    render() {
        return (
            <div>
                <Top />
                <Connect />
                <h3>
                    {document.cookie}
                </h3>
                <p>
                    {this.state.testData ? JSON.stringify(this.state.testData) : "noData"}
                </p>
                <Subscribe />
                
            </div>
        );
    }
}
export default Home;