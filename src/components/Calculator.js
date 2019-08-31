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
          onClick={this.onInput}
        >
          {i}
        </button>
      );
    }
    return items;
  }
  onInput = event => {
    this.props.input(event.target.value);
  };
  onEvalClick = () => {
    this.props.eval();
  };
  onClearClick = () => {
    this.props.clear();
  };
  render() {
    return (
      <div className="calculator">
        <button id="clear" type="button" onClick={this.onClearClick}>
          AC
        </button>
        <button id="add" type="button" onClick={this.onInput} value="+">
          +
        </button>
        <button id="substract" type="button" onClick={this.onInput} value="-">
          -
        </button>
        <button id="multiply" type="button" onClick={this.onInput} value="*">
          *
        </button>
        {this.getNumberButtons()}
        <button id="dot" type="button" onClick={this.onInput} value=".">
          .
        </button>
        <button id="divide" type="button" onClick={this.onInput} value="/">
          /
        </button>
        <button id="eval" type="button" onClick={this.onEvalClick} value="=">
          =
        </button>
      </div>
    );
  }
}
