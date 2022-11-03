import React, { Component } from "react";

class ClassComp extends Component {
  constructor(props) {
    super(props);
    console.log(props); // props is an object
    this.state = {
      count: 0,
      count2: 1
    };
  }

  onDecremnt() {
    this.setState({
      count : this.state.count - 1
    })
  }

  onReset() {
    this.setState({
      count : 0,
      count2: 0
    })
  }

  onIncrement(num) {
    this.setState({
      count : this.state.count + 1,
      // count2 : this.state.count2 + 2
    })
  }

  onIncrement2() {
    this.setState({
      count2 : this.state.count2 + 1
    })
  }

  render() {
    // console.log("Render", this.state);
    return (
      <div>
        {/* <h3>Count 1 - {this.state.count}</h3>
        <h3>Count 2 - {this.state.count2}</h3>
        <div>
          <button onClick={() => this.onIncrement(3)}>
            Increment 1
          </button>
          <button onClick={() => this.onDecremnt()}>
            Decrement 1
          </button>
          <button onClick={() => this.onReset()}>
            Reset
          </button>
        </div>
        <div>
        <button onClick={() => this.onIncrement2()}>
            Increment 2
          </button>
        </div> */}
        {this.props.name}
        {this.props.age}
      </div>
    );
  }
}

export default ClassComp;
