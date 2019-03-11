import React, { Component } from 'react'
import  {getColumns}  from "./services/InfoServices"
import Column from './Column';

class Board extends Component {
  constructor(){
    super()
    this.state = {
      columns: []
    }
  }
  componentDidMount = () => {
    getColumns()
      .then(response => this.setState({ columns: response }))
  }
  
  render() {
    const columns = this.state.columns.map((column, index) => 
      <Column {...column} key={index}/>
    )
    return(
      <div className="section">
        <div className="container-fluid">
          <div className="row">
            {columns}
          </div>
        </div>
      </div>
    )
  }
}

export default Board