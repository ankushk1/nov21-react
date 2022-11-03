import React, { Component } from "react";

export class ClassLC extends Component {
  constructor() {
    console.log("Constructor Called");
    super();
    this.state = {
      num: 0
    };
  }

  componentWillMount() {
    this.setState({
      num: this.state.num + 1
    });
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextState);
    if(nextState.num == 2) {
      return false;
    }
    return true
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  render() {
    console.log("Render called");
    return (
      <div>
        ClassLC
        <h3>{this.state.num}</h3>
        <button
          onClick={() =>
            this.setState({
              num: this.state.num + 1
            })
          }
        >
          Inc
        </button>
      </div>
    );
  }
}

export default ClassLC;
