import {FC} from 'react';
import React, {
  StyleProp,
  Text,
  TouchableHighlight,
  ViewStyle,
} from 'react-native';
import {styles} from './styles';

interface CalculatorButtonProps {
  children: string;
  handlePressButton: () => void;
  btnStyle?: StyleProp<ViewStyle>;
  theme: boolean;
}

export const CalculatorButton: FC<CalculatorButtonProps> = ({
  children,
  handlePressButton,
  btnStyle,
  theme,
}) => {
  return (
    <TouchableHighlight
      style={[styles.button, btnStyle]}
      onPress={handlePressButton}
      underlayColor={theme ? 'green' : 'blueviolet'}>
      <Text style={styles.text}>{children}</Text>
    </TouchableHighlight>
  );
};
