import React, { Component } from "react";

class Display extends Component {
  render() {
    return (
      <div type="text" style={this.props.style} tabIndex="0">
        {this.props.value}
      </div>
    );
  }
}

export default Display;
