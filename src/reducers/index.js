import { actions } from "../actions/index";

const defaultState = {
  input: "0",
  expressionToDisplay: "",
  expressionToEval: ""
};

const numbersRegex = /^[=\*+-\\]/;

export const rootReducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.INPUT:
      let expr = state.expressionToDisplay;
      if (state.expressionToDisplay !== state.expressionToEval) {
        if (!numbersRegex.test(action.input)) {
          expr = "";
        } else {
          expr = state.expressionToEval;
        }
      }
      expr += action.input;
      return {
        input: numbersRegex.test(action.input)
          ? action.input
          : state.expressionToDisplay + action.input,
        expressionToDisplay: expr,
        expressionToEval: expr
      };
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
