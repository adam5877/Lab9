import React from 'react';
import like7 from './like7.png';
import Love from './Love.png';
import happy from './happy.png';


class FacebookEmojiCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { number: 0 };
        this.increment = this.increment.bind(this);
      
        // Logging the imports to prevent unused variable warnings
        console.log(like7, Love, happy);
      
        if (this.props.type === "Love") this.pic = "❤️";
        else if (this.props.type === "Like") this.pic = "👍";
        else if (this.props.type === "happy") this.pic = "😊";
      }
      
      

  increment() {
    this.setState((prevState) => ({ number: prevState.number + 1 }));
  }

  render() {
    return (
      <div>
        <h5>{this.state.number} {this.props.type}</h5>
        <button onClick={this.increment}>
        <span style={{ fontSize: '2rem', marginRight: '10px' }}>{this.pic}</span>
          <b>{this.state.number}</b>
        </button>
      </div>
    );
  }
}

export default FacebookEmojiCounter;
