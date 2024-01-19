import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  display: {
    display: 'flex',
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  displayLight: {
    backgroundColor: 'white',
  },
  displayDark: {
    backgroundColor: 'rgb(19, 16, 16)',
  },
  prev: {
    fontSize: 30,
  },
  prevLight: {
    color: 'rgb(19, 16, 16)',
  },
  prevDark: {
    color: '#fff',
  },
  operator: {
    fontSize: 30,
  },
  operatorLight: {
    color: 'rgb(19, 16, 16)',
  },
  operatorDark: {
    color: '#fff',
  },
  current: {
    fontSize: 45,
  },
  currentLight: {
    color: 'rgb(19, 16, 16)',
  },
  currentDark: {
    color: '#fff',
  },
});
