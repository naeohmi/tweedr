import React, { Component } from 'react';
import ReactDOM from 'react-dom';

// The Input component will take a text input, and allow 
// it to be submitted into the database.
class Input extends Component {
  render() {
    return (
  	  <div className="createTweedr">
  	  	<input type="text" name="tweedr" placeholder="Tweedr here!" />
      	<button>Submit</button>
      </div>
    );
  }
}

export default Input;