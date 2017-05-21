import React, { Component } from 'react';
import Tweed from './Tweed';

class TweedrFeed extends Component  {
constructor(props) {
    super(props);
    this.state = {
    };
    this.componentWillReceiveProps= this.componentWillReceiveProps.bind(this);
}

componentWillReceiveProps(){
this.render()

}

render(){
  var tweeds = this.props.showallTweeds.map((a) =>
 <Tweed key={a.id}
        tweed={a.tweed} />

 )
return (
  <div className="tweedrFeed">
      {tweeds}
    </div>
  );}
}



export default TweedrFeed;