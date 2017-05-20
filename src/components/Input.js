import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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