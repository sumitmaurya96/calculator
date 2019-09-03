import React, { Component } from "react";

class Number extends Component {
  numberStyle = {
    backgroundColor: "white",
    color: "black",
    width: "60px",
    height: "60px",
    float: "left",
    border: "1px solid black",
    fontSize: "20px"
  };

  render() {
    return (
      <button
        key={this.props.numbers.id}
        onClick={() => this.props.onClick(this.props.numbers.id)}
        style={this.numberStyle}
      >
        {this.props.numbers.value}
      </button>
    );
  }
}

export default Number;
