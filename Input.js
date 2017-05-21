import React, { Component } from 'react';

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
      <div className="input">
      <form  onSubmit={this.handleCreate}>
        <input name="tweed" type="text" placeholder="Enter Tweed" ref="createInput"/>
        <button>Submit</button>
      </form>
      </div>
    );
  }
}

export default Input;
