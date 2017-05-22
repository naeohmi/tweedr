import React, { Component } from 'react';

// Return the app title.
class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>TWEEDR</h1>
        <h2>What ya Thinking?</h2>
      </div>
    );
  }
}

// Exporting Header to be imported in App component.
export default Header;