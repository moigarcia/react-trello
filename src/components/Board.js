import React, { Component } from 'react'
import  {getColumns}  from "./services/TrelloServices"
import Column from './Column';
import AddColumn from './AddColumn';

class Board extends Component {
 
  state = {
      columns: []
    }
  
  fetchColumns = () => {
    getColumns()
      .then(columns => this.setState({ columns }))
  }
  componentDidMount = () => {
    this.fetchColumns()
  }
  
  render() {
    const columns = this.state.columns.map((column) => 
      <Column {...column} key={column.id} fetchColumns={this.fetchColumns}/>
    )
    return(
      <div className="section">
        <div className="container-fluid">
          <div className="row">
            {columns}
          <AddColumn nextPosition={this.state.columns.length} fetchColumns={this.fetchColumns}/>
          </div>
        </div>
      </div>
    )
  }
}

export default Board