import React, { Component } from "react";
import Card from './Card';
import { deleteColumn } from './services/TrelloServices';
import { Link } from 'react-router-dom';

class Column extends Component  {
  constructor(props){
    super(props)
  }

  deleteColumn = () => {
    deleteColumn(this.props.id)
      .then(this.props.fetchColumns)
  }
    render() {
      const cards = this.props.cards.map(card => 
        <Card {...card} key={card.id} onClickDelete={this.props.fetchColumns} />
      ).reverse()

      return (    
        <div className="col-2 p-2 border border-secondary rounded">
          <h3><strong>{this.props.title}</strong></h3>
          <button className="btn btn-danger" onClick={this.deleteColumn}>x</button>
          {cards} 
          <Link to={`/columns/${this.props.id}/new_card?position=${cards.length + 1}`}>Add Card</Link> 
        </div> 

      )   
    }
}


export default Column