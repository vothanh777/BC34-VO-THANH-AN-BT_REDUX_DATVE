import React, { Component, PureComponent } from "react";

//shallow compare
//PureComponent thay thế cho shouldComponentUpdate để kiểm tra việc có render lại các hàm phía dưới hay k?
export default class ConComponent extends PureComponent {
  //   componentWillUnmount() {
  //     alert("componentWillUnmount của thằng Con");
  //   }

  //giá trị props mới
  //giá trị state hiện tại của component khi mounting và giá trị state mới khi updating
  static getDerivedStateFromProps(newProps, currentState) {
    console.log("CON getDerivedStateFromProps");
  }
  //giá trị props mới
  //giá trị state hiện tại của component
  // shouldComponentUpdate(newProps, newState) {
  //   console.log("CON shouldComponentUpdate");

  //   // if (this.state.like == newState.like) {
  //   //   return false;
  //   // }

  //   return true;
  // }

  //giá trị props cũ
  //giá trị state cũ của component
  getSnapshotBeforeUpdate(prevProp, prevState) {
    console.log("CON getSnapshotBeforeUpdate");
  }

  //không nên setState trong DidUpdate
  componentDidUpdate() {
    console.log("CON componentDidUpdate");
  }

  state = {
    like: 1,
    number: 1,
  };
  render() {
    console.log("CON render");
    return (
      <div>
        <h1>Like: {this.state.like}</h1>
        <button
          className="btn btn-danger"
          onClick={() => this.setState({ like: this.state.like + 1 })}
        >
          Updating LIKE
        </button>
      </div>
    );
  }
}
