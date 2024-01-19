import React, {FC} from 'react';
import {View} from 'react-native';
import {styles} from './styles';

interface CalculatorRowProps {
  children: JSX.Element;
}

export const CalculatorRow: FC<CalculatorRowProps> = ({children}) => {
  return <View style={styles.container}>{children}</View>;
};
