import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';

interface CalculatorDisplayProps {
  prev: string;
  operator: string;
  current: string;
  theme: boolean;
}

export const CalculatorDisplay: FC<CalculatorDisplayProps> = ({
  prev,
  operator,
  current,
  theme,
}) => {
  const displayStyles = [
    styles.display,
    theme ? styles.displayLight : styles.displayDark,
  ];

  const prevStyles = [styles.prev, theme ? styles.prevLight : styles.prevDark];
  const operatorStyles = [
    styles.operator,
    theme ? styles.operatorLight : styles.operatorDark,
  ];
  const currentStyles = [
    styles.current,
    theme ? styles.currentLight : styles.currentDark,
  ];

  return (
    <View style={displayStyles}>
      <Text style={prevStyles}>{prev}</Text>
      <Text style={operatorStyles}>{operator}</Text>
      <Text style={currentStyles}>{current}</Text>
    </View>
  );
};
