import {CalculatorStateType} from '../types';

export const handleEqual = (
  state: CalculatorStateType,
): CalculatorStateType => {
  const {currentValue, previousValue, operator} = state;

  const current = +currentValue;
  const prev = +previousValue;

  const resetState = {
    operator: '',
    previousValue: '',
  };

  if (operator === '/') {
    return {
      currentValue: String(prev / current),
      ...resetState,
    };
  }
  if (operator === '*') {
    return {
      currentValue: String(prev * current),
      ...resetState,
    };
  }
  if (operator === '+') {
    return {
      currentValue: String(prev + current),
      ...resetState,
    };
  }

  if (operator === '-') {
    return {
      currentValue: String(prev - current),
      ...resetState,
    };
  }
  return state;
};
