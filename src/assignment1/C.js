import React, { Component } from "react";

class C extends Component {
  render() {
    console.log(this.props, "this.props");
    return (
      <div>
        <p>This is from C component</p>
        <h1>{this.props.item}</h1>
        <h5>gibberish</h5>
        <h3>another gibberish</h3>
        <h1>consisted gibberish</h1>
      </div>
    );
  }
}

export default C;
