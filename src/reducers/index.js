import { actions } from "../actions/constants";

const operationRegex = /[\*\\\-\+]/i;
const buttonStringValues = {
  decimal: ".",
  equals: "=",
  subtract: "-",
  zero: "0"
};
const defaultState = {
  input: "0",
  display: "",
  evaluated: false
};

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
  if (
    state.input === buttonStringValues.zero &&
    input === buttonStringValues.zero
  ) {
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
    (input !== buttonStringValues.subtract &&
      operationRegex.test(state.input)) ||
    state.input.slice(-1) === buttonStringValues.decimal
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
  if (state.input.indexOf(buttonStringValues.decimal) > 0) {
    return state;
  } else {
    let input = state.input || 0;
    let display = state.display || 0;

    if (state.evaluated) {
      display = state.input;
    }

    if (operationRegex.test(state.input)) {
      display += buttonStringValues.zero;
    }

    display += buttonStringValues.decimal;
    input += buttonStringValues.decimal;

    return {
      input,
      display
    };
  }
};

const handleEval = state => {
  const expr = state.display;

  if (
    expr.slice(-1) === buttonStringValues.decimal ||
    operationRegex.test(expr.slice(-1))
  ) {
    removeUnnessesaryOperations(state.display);
  }

  let result = 0;

  try {
    result = Math.round(100000 * eval(expr || 0)) / 100000;
  } catch (e) {
    throw new Error("Something went wrong");
  }

  return {
    input: result,
    display: `${expr} = ${result}`,
    evaluated: true
  };
};

const removeUnnessesaryOperations = expression => {
  const result = expression;
  const regex = /\d/;
  regex.test(expression);
  return result.slice(0, regex.lastIndex + 1);
};
