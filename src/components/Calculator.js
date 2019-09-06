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
  getNumberButtons(from = 0, to = 0) {
    const items = [];
    for (let i = from; i >= to; i--) {
      items.push(
        <button
          id={numberNamings[i]}
          type="button"
          key={i}
          value={i}
          className="number-button"
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
          id="divide"
          type="button"
          value="/"
          onClick={this.onMathOperationPressed}
          className="math-operation-button"
        >
          /
        </button>
        <button
          id="multiply"
          type="button"
          value="*"
          onClick={this.onMathOperationPressed}
          className="math-operation-button"
        >
          *
        </button>
        {this.getNumberButtons(9, 7)}
        <button
          id="add"
          type="button"
          value="+"
          onClick={this.onMathOperationPressed}
          className="math-operation-button"
        >
          +
        </button>
        {this.getNumberButtons(6, 4)}
        <button
          id="subtract"
          type="button"
          value="-"
          onClick={this.onMathOperationPressed}
          className="math-operation-button"
        >
          -
        </button>
        {this.getNumberButtons(3, 1)}
        <button id="equals" type="button" onClick={this.onEvalClick}>
          =
        </button>
        {this.getNumberButtons()}
        <button
          id="decimal"
          type="button"
          onClick={this.onDecimalPressed}
          className="math-operation-button"
        >
          .
        </button>
      </div>
    );
  }
}
