//Here will be your action name constants and action creators
const INPUT = "INPUT";
const EVAL = "EVAL";
const CLEAR = "CLEAR";

export const actions = {
  INPUT,
  EVAL,
  CLEAR
};

export const inputText = text => {
  return {
    type: actions.INPUT,
    input: text
  };
};

export const evalText = () => {
  return {
    type: actions.EVAL
  };
};

export const clearText = () => {
  return {
    type: actions.CLEAR
  };
};
