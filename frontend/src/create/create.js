import React from 'react';
import TableMusic from './table.js';
import Mood from './mood.js';

import 'element-theme-default';

class Create extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      selected_moods: [],
      playlist_name: "",
      hasSearch: false
    }
  }

  handleClick(selected_moods, playlist_name) {
    this.setState({
      selected_moods: selected_moods,
      playlist_name: playlist_name,
      hasSearch: true
    });
  }

  render() {
    const hasSearch = this.state.hasSearch;
    
    const page = hasSearch ? (
      <TableMusic selected_moods={this.state.selected_moods} playlist_name={this.state.playlist_name}/>
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