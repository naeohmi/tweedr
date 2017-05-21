import React, { Component } from 'react';
import '../index.css';

// The Input component will take a text input, and allow 
// it to be submitted into the database.
class Input extends Component {
  constructor(props){
  super(props)
	this.handleCreate = this.handleCreate.bind(this)
  }
  
  handleCreate(event){
    event.preventDefault()
    this.props.createTweed(this.refs.createInput.value)
    this.refs.createInput.value = ""
  }
  
  render() {
    return (
      <div className="createForm">
      <form  onSubmit={this.handleCreate}>
        <input name="tweed" type="text" placeholder="Enter Tweed" ref="createInput"/>
        <button className="submitButton">Submit</button>
      </form>
      </div>
    );
  }
}

export default Input;