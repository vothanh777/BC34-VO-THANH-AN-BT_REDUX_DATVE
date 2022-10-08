import React, { Component } from "react";
import ChildProps from "./ChildProps";

export default class DemoProps extends Component {
  state = {
    number: 1,
  };

  changeNumber = () => {
    this.setState({ number: 2 });
  };
  render() {
    return (
      <div>
        <ChildProps
          propsNumber={this.state.number}
          changeNumber={this.changeNumber}
        />
      </div>
    );
  }
}
