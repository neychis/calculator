import React from "react";
import { inputText, clearText, evalText } from "../actions/index";
import { connect } from "react-redux";
import Calculator from "./Calculator";

const mapStateToProps = state => {
  return { ...state };
};

const mapDispatchToProps = dispatch => {
  return {
    inputText: text => {
      dispatch(inputText(text));
    },
    clear: () => {
      dispatch(clearText());
    },
    eval: () => {
      dispatch(evalText());
    }
  };
};

const Container = props => {
  return (
    <div className="wrapper">
      <div>{props.expressionToDisplay}</div>
      <div id="display">{props.input}</div>
      <Calculator
        eval={() => props.eval()}
        clear={() => props.clear()}
        input={text => props.inputText(text)}
      />
    </div>
  );
};

const Main = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

export default Main;
