import React, { Component } from 'react';
import './App.css';
// Importing axios to make APIs req/res.
import axios from 'axios';
// Importing all components that we want to use in App.js:
import Header from './components/Header';
import Input from './components/Input';
import TweedrFeed from './components/TweedrFeed';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tweed: [],
      }
    this.showname = this.showname.bind(this);
    this.createTweed = this.createTweed.bind(this);
  }

createTweed(record){
    // this pushes a new obj into state.todos array
    axios.post('https://tweedr.herokuapp.com/api/tweedrfeed', {
    tweed: record
      })
    .then((res) => {
      // console.log(res);
      window.location.reload();
      })
    .catch((error) => {
      // console.log(error);
      });
    }

  showname() {
    let targetURL = "https://tweedr.herokuapp.com/api/tweedrfeed";
    axios.get(targetURL)
      .then((res) => {
        this.setState({
          tweed: res.data.data
        })
        // console.log(this.state.tweed);
     })
    }

componentDidMount(){
  this.showname();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Input createTweed={this.createTweed}/>
        <div className="tweedr">
        <TweedrFeed showallTweeds={this.state.tweed}/>
        </div>
      </div>
    );
  }
}

export default App;