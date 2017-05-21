import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Input from './Input';
import TweedrFeed from './TweedrFeed';



class App extends Component {
constructor(props) {
        super(props)

        this.state = {
           tweed: [ ]
        }
      this.showname = this.showname.bind(this);
      this.createTweed = this.createTweed.bind(this);
      }



createTweed(record){
    // this pushes a new obj into state.todos array
     axios.post('https://tweedr.herokuapp.com/api/tweedrfeed', {
      tweed: record
  })
  .then(function (response) {
    console.log(response);
    window.location.reload();
  })
  .catch(function (error) {
    console.log(error);
  });
  
  }

showname() {
    let targetURL = "https://tweedr.herokuapp.com/api/tweedrfeed";
        axios.get(targetURL)
    .then((res) => {
      this.setState({tweed : res.data.data})
      console.log(this.state.tweed)
    })
 }


 
componentDidMount(){
this.showname();

}



  render() {
    return (
      <div className="App">
        <Input createTweed={this.createTweed}/>
        <TweedrFeed showallTweeds={this.state.tweed}/>
      </div>
    );
  }
}

export default App;
