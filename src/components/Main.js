import React from "react";
import * as actions from "../actions/index";
import { connect } from "react-redux";
import Calculator from "./Calculator";
import "../styles/calculator.scss";

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = dispatch => {
  return {
    digitPressed: digit => {
      dispatch(actions.digitPressed(digit));
    },
    clearPressed: () => {
      dispatch(actions.clearPressed());
    },
    evalPressed: () => {
      dispatch(actions.evalPressed());
    },
    decimalPressed: () => {
      dispatch(actions.decimalPressed());
    },
    mathOperationPressed: operation => {
      dispatch(actions.mathOperationPressed(operation));
    }
  };
};

const Container = props => {
  return (
    <div className="wrapper">
      <div>{props.display}</div>
      <div id="display">{props.input}</div>
      <Calculator
        eval={() => props.evalPressed()}
        clear={() => props.clearPressed()}
        digitPressed={digit => props.digitPressed(digit)}
        mathOperationPressed={operation =>
          props.mathOperationPressed(operation)
        }
        decimalPressed={() => props.decimalPressed()}
      />
    </div>
  );
};

const Main = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

export default Main;
