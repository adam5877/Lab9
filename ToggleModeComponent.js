import React from 'react';

class ToggleMode extends React.Component {
  constructor(props) {
    super(props);
    // Initial state: the "happy" emoji is shown
    this.state = { pic: "😊" };
    this.Toggle_Mode = this.Toggle_Mode.bind(this);
  }

  Toggle_Mode() {
    this.setState((prevState) => ({
      pic: prevState.pic === "😊" ? "😢" : "😊",
    }));
  }

  render() {
    return (
      <div>
        <h3>Toggle Emoji Mode</h3>
        <button onClick={this.Toggle_Mode}>
          <span style={{ fontSize: '2rem' }}>{this.state.pic}</span>
        </button>
      </div>
    );
  }
}

export default ToggleMode;
