import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../index.css';

// The Input component will take a text input, and allow 
// it to be submitted into the database.
class Input extends Component {
  render() {
    return (
  	  <div className="CreateTweedr">
  	  	<input type="text" name="tweedr" placeholder="Tweedr here!" />
        <button id="Submit">Submit</button>
      </div>
    );
  }
}

export default Input;