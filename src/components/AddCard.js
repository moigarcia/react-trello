import React, {Component} from 'react';
import { createCard } from './services/TrelloServices';
import { Link , Redirect} from 'react-router-dom';
const queryString = require('query-string');


class AddCard extends Component {
  constructor(props){
    super(props);
    this.state={
      card:{
        title:"",
        position:"",
        attachment:""
      },
      toBoard: false,
    }
  }

handleFormSubmit = (e)=> {
  e.preventDefault();
  const cardData = {
    ...this.state.card,
    position: queryString.parse(this.props.location.search).position,
    columns: this.props.match.params.columnId
  }

  createCard(cardData)
    .then(response => {
      this.setState({ 
        toBoard: true,
      });
    })
    .catch(err => console.log(err));
};


handleChange = (e) => {
  const { name, value, files} = e.target;
  this.setState({ 
    card:{
        ...this.state.card,
        [name]: (files && files[0]) ? files[0] : value
    }
  });
}


render (){
  if (this.state.toBoard) {
    return <Redirect to="/"/>
  }

  return (
    <div className="add-card mt-3 col-3 border rounded">
        <form onSubmit={this.handleFormSubmit}>
          <div className="mb-3">
               <div className="form-group">
                  <label><h4>Title</h4></label>
                    <input className="form-control" name="title" 
                      type="text" 
                      value={this.state.card.title}
                      onChange={e => this.handleChange(e)}>
                      </input>
                    </div>              
                    <div className="form-group">
                      <label><h4>Image</h4></label>
                      <input type="file" className="form-control"  id="imageFile" name='attachment'
                      onChange={e => this.handleChange(e)}/>
                    </div>                
                  <div className="control">
                    <button className="btn btn-primary">Add Card</button>
                  </div>
                  <Link to="/" className="text-info">Back</Link>
                  {this.state.card.attachment && <img src={URL.createObjectURL(this.state.card.attachment)} alt='preview'></img>}  
              </div>
          </form>    
      </div>
  )
}
}



export default AddCard 