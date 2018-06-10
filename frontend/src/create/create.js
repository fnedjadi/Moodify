import React from 'react';
import TableMusic from './table.js';
import Mood from './mood.js';

import 'element-theme-default';

class Create extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      hasSearch: false
    }
  }

  handleClick() {
    this.setState({
      hasSearch: true
    });
  }

  render() {
    const hasSearch = this.state.hasSearch;
    
    const page = hasSearch ? (
      <TableMusic/>
    ) : (
      <Mood onSearchClick={this.handleClick.bind(this)}/>
    );

    return (
      <div id='create-page'>
        {page}
      </div>
    )
  }
}

export default Create;