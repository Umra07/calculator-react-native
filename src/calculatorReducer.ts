import {initialState} from './App';
import {CalculatorStateType} from './types';
import {handleEqual} from './utils/handleEqual';

export const calculatorReducer = (
  state: CalculatorStateType,
  action: {type: string; payload: string},
): CalculatorStateType => {
  switch (action.type) {
    case 'number':
      if (state.currentValue === '0') {
        return {
          ...state,
          currentValue: action.payload,
        };
      }
      return {
        ...state,
        currentValue: state.currentValue + action.payload,
      };
    case 'operator':
      return {
        previousValue: state.currentValue,
        currentValue: '0',
        operator: action.payload,
      };
    case 'clear':
      return initialState;
    case 'equal':
      const result = handleEqual(state);
      return result;
    case 'posneg':
      return {
        ...state,
        currentValue: `${+state.currentValue * -1}`,
      };
    case 'percentage':
      return {
        ...state,
        currentValue: `${+state.currentValue * 0.01}`,
      };
    default:
      return state;
  }
};
