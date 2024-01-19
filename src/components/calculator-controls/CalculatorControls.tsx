import React, {Dispatch, FC} from 'react';
import {CalculatorRow} from '../row/CalculatorRow';
import {CalculatorButton} from '../calculator-button/CalculatorButton';
import {View} from 'react-native';
import {styles} from './styles';

interface CalculatorControlsProps {
  dispatch: Dispatch<{type: string; payload: string}>;
  theme: boolean;
}

export const CalculatorControls: FC<CalculatorControlsProps> = ({
  dispatch,
  theme,
}) => {
  const controlsStyles = [
    styles.controls,
    theme ? styles.controlsDay : styles.controlsNight,
  ];
  return (
    <View style={controlsStyles}>
      <CalculatorRow>
        <>
          <CalculatorButton
            handlePressButton={() => dispatch({type: 'clear', payload: ''})}
            theme={theme}>
            AC
          </CalculatorButton>
          <CalculatorButton
            handlePressButton={() => dispatch({type: 'posneg', payload: ''})}
            theme={theme}>
            ±
          </CalculatorButton>
          <CalculatorButton
            handlePressButton={() =>
              dispatch({type: 'percentage', payload: ''})
            }
            theme={theme}>
            %
          </CalculatorButton>
          <CalculatorButton
            handlePressButton={() => dispatch({type: 'operator', payload: '/'})}
            theme={theme}>
            /
          </CalculatorButton>
        </>
      </CalculatorRow>
      <CalculatorRow>
        <>
          <CalculatorButton
            handlePressButton={() => dispatch({type: 'number', payload: '7'})}
            theme={theme}>
            7
          </CalculatorButton>
          <CalculatorButton
            handlePressButton={() => dispatch({type: 'number', payload: '8'})}
            theme={theme}>
            8
          </CalculatorButton>
          <CalculatorButton
            handlePressButton={() => dispatch({type: 'number', payload: '9'})}
            theme={theme}>
            9
          </CalculatorButton>
          <CalculatorButton
            handlePressButton={() => dispatch({type: 'operator', payload: '*'})}
            theme={theme}>
            *
          </CalculatorButton>
        </>
      </CalculatorRow>
      <CalculatorRow>
        <>
          <CalculatorButton
            handlePressButton={() => dispatch({type: 'number', payload: '4'})}
            theme={theme}>
            4
          </CalculatorButton>
          <CalculatorButton
            handlePressButton={() => dispatch({type: 'number', payload: '5'})}
            theme={theme}>
            5
          </CalculatorButton>
          <CalculatorButton
            handlePressButton={() => dispatch({type: 'number', payload: '6'})}
            theme={theme}>
            6
          </CalculatorButton>
          <CalculatorButton
            handlePressButton={() => dispatch({type: 'operator', payload: '-'})}
            theme={theme}>
            -
          </CalculatorButton>
        </>
      </CalculatorRow>
      <CalculatorRow>
        <>
          <CalculatorButton
            handlePressButton={() => dispatch({type: 'number', payload: '1'})}
            theme={theme}>
            1
          </CalculatorButton>
          <CalculatorButton
            handlePressButton={() => dispatch({type: 'number', payload: '2'})}
            theme={theme}>
            2
          </CalculatorButton>
          <CalculatorButton
            handlePressButton={() => dispatch({type: 'number', payload: '3'})}
            theme={theme}>
            3
          </CalculatorButton>
          <CalculatorButton
            handlePressButton={() => dispatch({type: 'operator', payload: '+'})}
            theme={theme}>
            +
          </CalculatorButton>
        </>
      </CalculatorRow>
      <CalculatorRow>
        <>
          <CalculatorButton
            btnStyle={styles.doubledButton}
            handlePressButton={() => dispatch({type: 'number', payload: '0'})}
            theme={theme}>
            0
          </CalculatorButton>
          <CalculatorButton
            handlePressButton={() => dispatch({type: 'number', payload: '.'})}
            theme={theme}>
            .
          </CalculatorButton>
          <CalculatorButton
            handlePressButton={() => dispatch({type: 'equal', payload: ''})}
            theme={theme}>
            =
          </CalculatorButton>
        </>
      </CalculatorRow>
    </View>
  );
};
