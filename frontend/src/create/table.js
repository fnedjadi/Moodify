import React from 'react';
import { Table } from 'element-react';
import { Button } from 'element-react';

import 'element-theme-default';

class TableMusic extends React.Component {
  constructor(props) {
    super(props);
  
    this.state = {
      columns: [
        {
          type: 'index'
        },
        {
          label: "Artiste",
          prop: "artiste",
          sortable: true,
          width: 150,
          render: function(data){
            return (
            <span>
              <span style={{marginLeft: '10px'}}>{data.artiste}</span>
            </span>)
          }
        },
        {
          label: "Song",
          prop: "title",
          width: 160
        },
        {
          label: "Album",
          prop: "album",
          width: 160
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
      data: [{
        artiste: 'Lady Gaga',
        title: 'Bad Romance',
        album: 'Bad Romance',
       }]
    }
  }

  deleteRow(index) {
    const { data } = this.state;
    data.splice(index, 1);
    this.setState({
      data: [...data]
    })
  }
  
  render() {
    return (
      <div>
        <Table
          className='create-table'
          style={{width: '100%', height: '100%'}}
          columns={this.state.columns}
          data={this.state.data}
          border={true}
          highlightCurrentRow={true}
          emptyText='N/A'
        />
      </div>
    )
  }
}

export default TableMusic;