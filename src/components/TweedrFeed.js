import React, { Component } from 'react';
// Importing the Tweed component.
import Tweed from './Tweed'

// Holds Tweed components, which reflect the 
// information in the database.
class TweedrFeed extends Component  {
constructor(props) {
    super(props);
    this.state = {
      };
    this.componentWillReceiveProps = this.componentWillReceiveProps.bind(this);
}

  componentWillReceiveProps() {
    this.render();
  }

  render(){
  // Looping through each Tweed, and assign a variable to it.
  var tweeds = this.props.showallTweeds.map((a) =>
      <Tweed key={a.id}
             tweed={a.tweed} />
      ) 
  // Returning the variable above, inside a div.
      return (
        <div className="tweedrFeed"> {tweeds} </div>
      );
    }
  }

// Exporting TweedrFeed to be imported in App component.
export default TweedrFeed;