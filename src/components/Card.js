import React from 'react';
import { deleteCard } from './services/TrelloServices';

const Card = (props) => {

  const onClickDelete = () => {
    deleteCard(props.id)
      .then(props.onClickDelete)
  };

    return (
    <div className="p-2 border rounded">
      <p>{props.title}</p>
      <button className="btn btn-danger" onClick={onClickDelete}>x</button>
      <img src={props.imageURL} alt="image"/>
    </div>
    )
  
}

export default Card