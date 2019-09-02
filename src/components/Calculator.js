import React from "react";
import "../styles/calculator.scss";

const numberNamings = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine"
];

export default class Calculator extends React.Component {
  getNumberButtons() {
    const items = [];
    for (let i = numberNamings.length - 1; i >= 0; i--) {
      items.push(
        <button
          id={numberNamings[i]}
          type="button"
          key={i}
          value={i}
          onClick={this.onDigitPressed}
        >
          {i}
        </button>
      );
    }
    return items;
  }
  onDigitPressed = event => {
    this.props.digitPressed(event.target.value);
  };
  onMathOperationPressed = event => {
    this.props.mathOperationPressed(event.target.value);
  };
  onEvalClick = () => {
    this.props.eval();
  };
  onClearClick = () => {
    this.props.clear();
  };
  onDecimalPressed = () => {
    this.props.decimalPressed();
  };
  render() {
    return (
      <div className="calculator">
        <button id="clear" type="button" onClick={this.onClearClick}>
          AC
        </button>
        <button
          id="add"
          type="button"
          onClick={this.onMathOperationPressed}
          value="+"
        >
          +
        </button>
        <button
          id="subtract"
          type="button"
          onClick={this.onMathOperationPressed}
          value="-"
        >
          -
        </button>
        <button
          id="multiply"
          type="button"
          onClick={this.onMathOperationPressed}
          value="*"
        >
          *
        </button>
        {this.getNumberButtons()}
        <button
          id="divide"
          type="button"
          onClick={this.onMathOperationPressed}
          value="/"
        >
          /
        </button>
        <button id="equals" type="button" onClick={this.onEvalClick}>
          =
        </button>
        <button id="decimal" type="button" onClick={this.onDecimalPressed}>
          .
        </button>
      </div>
    );
  }
}
