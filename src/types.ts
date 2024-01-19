export interface CalculatorButtonsType {
  row1: string[];
  row2: string[];
  row3: string[];
  row4: string[];
  row5: string[];
}

export type CalculatorStateType = {
  currentValue: string;
  previousValue: string;
  operator: string;
};
