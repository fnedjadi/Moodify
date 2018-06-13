import React from 'react';
import  { Redirect } from 'react-router-dom'
import cookie from 'react-cookies';
import { Table, Button, Loading, Message } from 'element-react';

import 'element-theme-default';

class TableMusic extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fullscreen: true,
      columns: [
        {
          type: 'index'
        },
        {
          label: "Artist",
          prop: "artiste",
          sortable: true,
          width: 200,
          render: function (data) {
            return (
              <span>
                <span style={{ marginLeft: '10px' }}>{data.artist}</span>
              </span>)
          }
        },
        {
          label: "Song",
          prop: "name",
          width: 200
        },
        {
          label: "Album",
          prop: "album",
          width: 200
        },
        {
          label: "",
          prop: "",
          width: 110,
          render: (row, column, index) => {
            return (
              <span>
                <Button type="danger" size="small" icon="delete" onClick={this.deleteRow.bind(this, index)}>Delete</Button>
              </span>
            )
          }
        }
      ],
      data: [],
      redirect: false
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/playlist/generate?access_token=' + cookie.load('spotify_access_token') +
          '&moods=' + this.props.selected_moods.join(','))
      .then(response => response.json())
      .then(response => {
        console.log("responded");
        console.log(response);
        console.log("responded");

        this.setState({
          data: response,
          fullscreen: false
        })
      })
  }

  submitPlaylist() {
    fetch('http://localhost:8080/playlist/submit?access_token=' + cookie.load('spotify_access_token') + '&name=' + this.props.playlist_name, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state.data)
    }).then(res => { 
      if (res.status === 200) {
        this.setState({ redirect: true });
      }
    });
  }

  deleteRow(index) {
    const { data } = this.state;
    data.splice(index, 1);
    this.setState({
      data: [...data]
    })
  }


  renderRedirect() {
    if (this.state.redirect) {
      Message({
        message: "The playlist have been add.",
        type: 'success'
      });
      return <Redirect to='/'  />
    }
  }

  render() {
    return (
      <div style={{overflow: 'auto', height: '100%'}}>
        {
          this.state.fullscreen && <Loading fullscreen={true} />
        }
        <div id='playlist-table'>
          <Table
            className='create-table'
            style={{ width: '100%', height: '100%', background: 'transparent', margin: '0px auto 50px 20%'}}
            columns={this.state.columns}
            data={this.state.data}
            border={true}
            highlightCurrentRow={true}
            emptyText='N/A'
          />          
          <a className='button-addplaylist' target="_blank" rel="noopener noreferrer" onClick={this.submitPlaylist.bind(this)}>Add this playlist to my Spotify account!</a>
        </div>
        {this.renderRedirect()}
      </div>
    )
  }
}

export default TableMusic;