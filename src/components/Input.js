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
    // Get the value that user writted in the input field.
    this.props.createTweed(this.refs.createInput.value)
    // Then, delete the text from the input field, so user doesn't
    // have to delete it manually.
    this.refs.createInput.value = ""
  }
  
  // Return the form (which contains an input field and submit button).
  // The form execute the method above (handleCreate).
  render() {
    return (
      <div className="createForm">
      <form onSubmit={this.handleCreate}>
        <input name="tweed" type="text" placeholder="Enter Tweed" ref="createInput"/>
        <button className="submitButton">Submit</button>
      </form>
      </div>
    );
  }
}

// Exporting Input to be imported in App component.
export default Input;