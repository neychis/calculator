import { actions } from "../actions/constants";

const defaultState = {
  input: "0",
  display: "",
  evaluated: false
};

const operationRegex = /[\*\\\-\+]/i;

export const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.DIGIT_PRESSED:
      return handleDigitInput(state, action.digit);
    case actions.CLEAR_PRESSED:
      return defaultState;
    case actions.EVAL_PRESSED:
      return handleEval(state);
    case actions.DECIMAL_PRESSED:
      return handleDecimalInput(state);
    case actions.MATH_OPERATION_PRESSED:
      return handleMathOperation(state, action.operation);
    default:
      return state;
  }
};

const handleDigitInput = (state, input) => {
  //TODO: check if last symbol of expressionToDisplay is number
  let expr = state.display;
  console.log(expr);
  if (state.evaluated || !expr || +expr === 0) {
    console.log(expr);
    expr = "";
  }
  expr += input;
  if (!operationRegex.test(state.input)) {
    input = state.input + input;
  }
  return {
    input: input,
    display: expr,
    expressionToEval: expr
  };
};

const handleMathOperation = (state, input) => {
  let display = state.display || "";
  if (state.evaluated) {
    display = state.input;
  }
  console.log(state.input.toString().slice(-1));
  if (operationRegex.test(state.input) || state.display.slice(-1) === ".") {
    display = state.display.slice(-1);
  }
  display += input;
  return {
    input,
    display,
    expressionToEval: display
  };
};

const handleDecimalInput = state => {
  if (state.input.split().indexOf(".") > 0) {
    return state;
  } else {
    let input = state.input || 0;
    let display = state.display || 0;
    if (state.evaluated) {
      display = state.input;
    }
    if (operationRegex.test(state.input)) {
      display += "0";
    }
    display += ".";
    input += ".";
    return {
      input,
      display
    };
  }
};

const handleEval = state => {
  console.log(state);
  let result = 0;
  try {
    result = Math.round(100000 * eval(state.display || 0)) / 100000;
  } catch (e) {}
  return {
    input: result,
    display: state.display + "=" + result,
    evaluated: true
  };
};
