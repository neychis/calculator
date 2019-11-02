import React from "react";
import Button from "./Button";
import { numberNamings } from "../constants";
import "../styles/calculator.scss";

export default class Calculator extends React.Component {
  _mathOperationClassName = "math-operation-button";
  getNumberButtons(from = 0, to = 0) {
    const items = [];
    for (let i = from; i >= to; i--) {
      items.push(
        <Button
          id={numberNamings[i]}
          key={i}
          value={i}
          className="number-button"
          onClick={this.onDigitPressed}
        >
          {i}
        </Button>
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
        <Button id="clear" onClick={this.onClearClick}>
          AC
        </Button>
        <Button
          id="divide"
          value="/"
          onClick={this.onMathOperationPressed}
          className={this._mathOperationClassName}
        >
          /
        </Button>
        <Button
          id="multiply"
          value="*"
          onClick={this.onMathOperationPressed}
          className={this._mathOperationClassName}
        >
          > *
        </Button>
        {this.getNumberButtons(9, 7)}
        <Button
          id="add"
          value="+"
          onClick={this.onMathOperationPressed}
          className={this._mathOperationClassName}
        >
          +
        </Button>
        {this.getNumberButtons(6, 4)}
        <Button
          id="subtract"
          value="-"
          onClick={this.onMathOperationPressed}
          className={this._mathOperationClassName}
        >
          -
        </Button>
        {this.getNumberButtons(3, 1)}
        <Button id="equals" onClick={this.onEvalClick}>
          =
        </Button>
        {this.getNumberButtons()}
        <Button
          id="decimal"
          onClick={this.onDecimalPressed}
          className={this._mathOperationClassName}
        >
          .
        </Button>
      </div>
    );
  }
}
