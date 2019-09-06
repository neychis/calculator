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
  if (+state.input === 0 && +input === 0) {
    return state;
  } else {
    let expr = state.display;
    if (+expr === 0 || state.evaluated) {
      expr = input;
    } else {
      expr += input;
      if (!operationRegex.test(state.input)) {
        input = state.input + input;
      }
    }

    return {
      input: input,
      display: expr,
      expressionToEval: expr
    };
  }
};

const handleMathOperation = (state, input) => {
  let display = state.display || "";
  if (state.evaluated) {
    display = state.input;
  } else if (
    (input !== "-" && operationRegex.test(state.input)) ||
    state.input.slice(-1) === "."
  ) {
    display = removeUnnessesaryOperations(state.display);
  }
  display += input;
  return {
    input,
    display,
    expressionToEval: display
  };
};

const handleDecimalInput = state => {
  if (state.input.indexOf(".") > 0) {
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
  const expr = state.display;
  if (expr.slice(-1) === "." || operationRegex.test(expr.slice(-1))) {
    removeUnnessesaryOperations(state.display);
  }
  let result = 0;
  try {
    result = Math.round(100000 * eval(expr || 0)) / 100000;
  } catch (e) {}
  return {
    input: result,
    display: expr + "=" + result,
    evaluated: true
  };
};

const removeUnnessesaryOperations = expression => {
  const result = expression;
  const regex = /\d/;
  regex.test(expression);
  return result.slice(0, regex.lastIndex + 1);
};
