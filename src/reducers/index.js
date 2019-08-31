import { actions } from "../actions/index";

const defaultState = {
  input: "0",
  expressionToDisplay: "",
  expressionToEval: ""
};

export const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.INPUT:
      return handleInput(state, action.input);
    case actions.CLEAR:
      return defaultState;
    case actions.EVAL:
      let result = 0;
      try {
        result = Math.round(100000 * eval(state.expressionToEval)) / 100000;
      } catch (e) {}
      return {
        input: result,
        expressionToDisplay: state.expressionToDisplay + "=" + result,
        expressionToEval: result
      };
    default:
      return state;
  }
};

const handleInput = (state, input) => {
  const numbersRegex = /^[=\*\+\-\\]/;
  console.log(`${input} ${numbersRegex.test(input)}`);
  let expr = state.expressionToDisplay;
  if (state.expressionToDisplay !== state.expressionToEval) {
    if (!numbersRegex.test(input)) {
      expr = "";
    } else {
      expr = state.expressionToEval;
    }
  }
  expr += input;
  return {
    input: numbersRegex.test(input) ? input : state.expressionToDisplay + input,
    expressionToDisplay: expr,
    expressionToEval: expr
  };
};
