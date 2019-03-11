import React, { Component } from "react";
import Card from './Card';

class Column extends Component  {
  constructor(props){
    super(props)
    this.state = {
      cards: this.props.cards
    }
  }
    render() {
      const cards = this.state.cards.map((card, index) => 
        <Card {...card} key={index} />
      )

      return (    
        <div className="col-2 p-2 border border-secondary rounded">
          <h3><strong>{this.props.title}</strong></h3>
          {cards} 
        </div> 
      )   
    }
}


export default Column