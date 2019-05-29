import React, {Component} from 'react';
import { createColumn } from './services/TrelloServices';



class AddColumn extends Component {
  constructor(props){
    super(props);
    this.state={
      column:{
        title:""
      }
    }
  }

handleFormSubmit = (e)=> {
  e.preventDefault();
  const columnData = {
    ...this.state.column,
    position: this.props.nextPosition
  }
  createColumn(columnData)
    .then(this.props.fetchColumns)
    .catch(err => console.log(err));
};


handleChange = (e) => {
  const { name, value} = e.target;
  this.setState({ 
    column:{
        ...this.state.card,
        [name]: value
    }
  });
}


render (){
  
  return (
    <div className="col-2 p-2 border border-secondary rounded add-column">
      <form onSubmit={this.handleFormSubmit}>
        <div className="form-group">
          <label><h4>Title</h4></label>
            <input className="form-control" name="title" 
              type="text" 
              value={this.state.column.title}
              onChange={e => this.handleChange(e)}>
            </input>
        </div> 
            <div className="control">
              <button className="btn btn-primary">Add Column</button>
            </div>
      </form>    
    </div>

  )
  }
}

export default AddColumn