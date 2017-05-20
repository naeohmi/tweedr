import React, { Component } from 'react';
import './App.css';
import Input from './components/Input';
import TweedrFeed from './components/TweedrFeed';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Input />
        <TweedrFeed />
      </div>
    );
  }
}

export default App;