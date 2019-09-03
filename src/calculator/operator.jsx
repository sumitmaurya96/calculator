import React, { Component } from "react";

class Operator extends Component {
  operatorStyle = {
    backgroundColor: "#F2274F",
    color: "white",
    width: "82px",
    height: "60px",
    float: "top",
    border: "1px solid black",
    fontSize: "20px"
  };
  render() {
    return (
      <button
        key={this.props.operator.id}
        style={this.operatorStyle}
        onClick={() => this.props.onClick(this.props.operator.value)}
      >
        {this.props.operator.id}
      </button>
    );
  }
}

export default Operator;
