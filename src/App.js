import React, { Component } from "react";
import "./App.css";
import Number from "./calculator/number";
import Operator from "./calculator/operator";
import Display from "./calculator/display";

class App extends Component {
  state = {
    numbers: [
      { id: 1, value: 1 },
      { id: 2, value: 2 },
      { id: 3, value: 3 },
      { id: 4, value: 4 },
      { id: 5, value: 5 },
      { id: 6, value: 6 },
      { id: 7, value: 7 },
      { id: 8, value: 8 },
      { id: 9, value: 9 },
      { id: "D", value: "D" },
      { id: 0, value: 0 },
      { id: "=", value: "=" }
    ],
    operator: [
      { id: "MUL", value: "*" },
      { id: "DIV", value: "/" },
      { id: "ADD", value: "+" },
      { id: "SUB", value: "-" }
    ],
    string: ""
  };

  validateString = () => {
    let i = 0;
    let char = "";
    for (i = 0; i < this.state.string.length - 1; i++) {
      let char = this.state.string[i].toString();

      if (
        char !== "0" &&
        char !== "1" &&
        char !== "2" &&
        char !== "3" &&
        char !== "4" &&
        char !== "5" &&
        char !== "6" &&
        char !== "7" &&
        char !== "8" &&
        char !== "9" &&
        char !== "*" &&
        char !== "+" &&
        char !== "-" &&
        char !== "/"
      )
        return false;
    }
    char = this.state.string[i].toString();

    if (char === "*" || char === "+" || char === "-" || char === "/")
      return false;
    return true;
  };

  isValidAppend = operatorValue => {
    operatorValue = operatorValue.toString();
    let lengths = this.state.string.length;
    if (lengths === 0) {
      if (
        operatorValue === "*" ||
        operatorValue === "/" ||
        operatorValue === "+"
      )
        return false;
      return true;
    } else {
      let prevValueInString = this.state.string[lengths - 1];
      if (prevValueInString === "*" || prevValueInString === "/") {
        if (operatorValue === "+" || operatorValue === "-") return true;
        else return false;
      } else if (prevValueInString === "-" || prevValueInString === "+")
        return false;
      else return true;
    }
  };

  deleteEntry = () => {
    let string = "";
    if (this.state.string === "Infinity" || this.state.string === "NaN") {
      this.setState({ string });
      return;
    }
    for (let i = 0; i < this.state.string.length - 1; i++)
      string += this.state.string[i].toString();
    this.setState({ string });
  };

  calculateResult = () => {
    if (this.validateString() === true) {
      let string = eval(this.state.string).toString();
      this.setState({ string });
    }
  };

  appendOperator = operatorValue => {
    let { string } = this.state;
    if (this.isValidAppend(operatorValue)) string += operatorValue;
    this.setState({ string });
  };

  appendNumber = numberValue => {
    if (numberValue === "D") this.deleteEntry();
    else if (numberValue === "=") this.calculateResult();
    else {
      let { string } = this.state;
      string += numberValue;
      this.setState({ string });
    }
  };

  clearDisplay = () => {
    let string = "";
    this.setState({ string });
  };

  displayStyle = {
    backgroundColor: "black",
    color: "white",
    width: "260px",
    height: "100px",
    float: "top",
    border: "1px solid black",
    fontSize: "50px",
    overflow: "auto"
  };

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <div style={{ height: "200px" }}></div>
          <div style={{ height: "500px", width: "265px", margin: "0px auto" }}>
            <div>
              <div>
                <Display style={this.displayStyle} value={this.state.string} />
              </div>
              <div style={{ float: "left" }}>
                <Number
                  onClick={this.appendNumber}
                  numbers={this.state.numbers[0]}
                />
                <Number
                  onClick={this.appendNumber}
                  numbers={this.state.numbers[1]}
                />
                <Number
                  onClick={this.appendNumber}
                  numbers={this.state.numbers[2]}
                />
                <div style={{ clear: "both" }}></div>
                <Number
                  onClick={this.appendNumber}
                  numbers={this.state.numbers[3]}
                />
                <Number
                  onClick={this.appendNumber}
                  numbers={this.state.numbers[4]}
                />
                <Number
                  onClick={this.appendNumber}
                  numbers={this.state.numbers[5]}
                />
                <div style={{ clear: "both" }}></div>
                <Number
                  onClick={this.appendNumber}
                  numbers={this.state.numbers[6]}
                />
                <Number
                  onClick={this.appendNumber}
                  numbers={this.state.numbers[7]}
                />
                <Number
                  onClick={this.appendNumber}
                  numbers={this.state.numbers[8]}
                />
                <div style={{ clear: "both" }}></div>
                <Number
                  onClick={this.appendNumber}
                  numbers={this.state.numbers[9]}
                />
                <Number
                  onClick={this.appendNumber}
                  numbers={this.state.numbers[10]}
                />
                <Number
                  onClick={this.appendNumber}
                  numbers={this.state.numbers[11]}
                />
                <div style={{ clear: "both" }}></div>
              </div>

              <div style={{ float: "left" }}>
                <Operator
                  onClick={this.appendOperator}
                  operator={this.state.operator[0]}
                />
                <div style={{ clear: "both" }}></div>
                <Operator
                  onClick={this.appendOperator}
                  operator={this.state.operator[1]}
                />
                <div style={{ clear: "both" }}></div>
                <Operator
                  onClick={this.appendOperator}
                  operator={this.state.operator[2]}
                />
                <div style={{ clear: "both" }}></div>
                <Operator
                  onClick={this.appendOperator}
                  operator={this.state.operator[3]}
                />
              </div>
            </div>
            <button
              style={{
                height: "60px",
                width: "262px",
                backgroundColor: "#F2274F",
                border: "1px solid black",
                fontSize: "40px",
                color: "white"
              }}
              onClick={this.clearDisplay}
            >
              Clear
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
