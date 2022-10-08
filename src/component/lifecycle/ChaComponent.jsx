import React, { Component } from "react";
import ConComponent from "./ConComponent";

export default class ChaComponent extends Component {
  state = {
    number: 1,
    sub: 1,
  };
  //   constructor() {
  //     super();
  //     console.log("constructor");
  //   }

  //giá trị props mới
  //giá trị state hiện tại của component
  //   static getDerivedStateFromProps(newProps, currentState) {
  //     console.log("getDerivedStateFromProps");
  //   }
  //giá trị props mới
  //giá trị state hiện tại của component khi mounting và giá trị state mới khi updating
  //   shouldComponentUpdate(newProps, newState) {
  //     console.log("shouldComponentUpdate");
  //     return true;
  //   }

  render() {
    // console.log("render");
    return (
      <div>
        <h1>Number:{this.state.number}</h1>

        <button
          className="btn btn-success"
          onClick={() => this.setState({ number: this.state.number + 1 })}
        >
          Updating
        </button>

        <h1>Sub:{this.state.sub}</h1>
        <button
          className="btn btn-primary"
          onClick={() => this.setState({ sub: this.state.sub + 1 })}
        >
          Updating
        </button>

        <ConComponent sub={this.state.sub} />
      </div>
    );
  }

  //giá trị props cũ
  //giá trị state cũ của component
  //   getSnapshotBeforeUpdate(prevProp, prevState) {
  //     console.log("getSnapshotBeforeUpdate");
  //   }

  //   //không nên setState trong DidUpdate
  //   componentDidUpdate() {
  //     console.log("componentDidUpdate");
  //   }

  //   //gọi API lấy data
  //   componentDidMount() {
  //     console.log("componentDidMount");
  //   }
}
