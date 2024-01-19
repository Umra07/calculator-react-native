/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect, useReducer, useState} from 'react';
import {View, StyleSheet, Text, Appearance} from 'react-native';
import {calculatorReducer} from './calculatorReducer';
import {CalculatorStateType} from './types';
import {ThemeButton} from './components/theme-button/ThemeButton';
import {CalculatorDisplay} from './components/calculator-display/CalculatorDisplay';
import {CalculatorControls} from './components/calculator-controls/CalculatorControls';

export const initialState: CalculatorStateType = {
  currentValue: '0',
  previousValue: '',
  operator: '',
};

export function App(): React.JSX.Element {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);
  const [theme, setTheme] = useState<boolean>(true);

  const handlePressThemeButton = () => {
    setTheme(prevTheme => !prevTheme);
  };

  useEffect(() => {
    const colorScheme = Appearance.getColorScheme();
    if (colorScheme === 'dark') {
      setTheme(false);
    } else {
      setTheme(true);
    }
  }, []);

  const appStyle = [styles.app, theme ? styles.appLight : styles.appDark];

  return (
    <View style={appStyle}>
      <ThemeButton onPressThemeButton={handlePressThemeButton} theme={theme} />
      <Text>{theme}</Text>
      <CalculatorDisplay
        prev={state.previousValue}
        operator={state.operator}
        current={state.currentValue}
        theme={theme}
      />
      <CalculatorControls dispatch={dispatch} theme={theme} />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    height: '100%',
  },
  appLight: {
    backgroundColor: '#fff',
  },
  appDark: {
    backgroundColor: 'rgb(19, 16, 16)',
  },
});
