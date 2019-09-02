import { actions } from "./constants";

export const digitPressed = digit => {
  return {
    type: actions.DIGIT_PRESSED,
    digit
  };
};
export const evalPressed = () => {
  return { type: actions.EVAL_PRESSED };
};
export const clearPressed = () => {
  return { type: actions.CLEAR_PRESSED };
};
export const decimalPressed = () => {
  return { type: actions.DECIMAL_PRESSED };
};
export const mathOperationPressed = operation => {
  return {
    type: actions.MATH_OPERATION_PRESSED,
    operation
  };
};
