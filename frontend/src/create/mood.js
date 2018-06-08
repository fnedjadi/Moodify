import React from 'react';
import Loading from './loading.js';

class Mood extends React.Component {
    render() {
        return (
        <div id='mood'>
            Mood 
            <Loading onSearchClick={this.props.onSearchClick}/>
        </div>
        );
    }
}

export default Mood;