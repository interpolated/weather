import React from 'react';


export default class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {term:''}
    const weatherMapAPIKey = 'c11d2e0f89b8995fba06551186c9e396'

  }

  onInputChange(event){
    console.log(event.target.value);
    this.setState({term: event.target.value})
  }

  onFormSubmit(event){
    event.preventDefault();
  }

  render(){
    return (
        <form onSubmit={this.onFormSubmit} className='input-group'>
          <input 
            type="text"
            placeholder = "get dat 5 day forecast"
            className = 'form-control'
            value = {this.state.term}
            onChange = {this.onInputChange.bind(this)} />
          <span className="input-group-btn">
            <button className="btn btn-secondary" type="submit">Submit</button>
          </span>
        </form>
      )
    
  }
}
