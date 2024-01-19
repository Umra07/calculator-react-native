import React, {FC} from 'react';
import {StyleSheet, Switch, View} from 'react-native';

interface ThemeButtonProps {
  onPressThemeButton: () => void;
  theme: boolean;
}

export const ThemeButton: FC<ThemeButtonProps> = ({
  onPressThemeButton,
  theme,
}) => {
  return (
    <View style={styles.container}>
      <Switch
        thumbColor={theme ? 'black' : 'white'}
        trackColor={{false: 'blue', true: 'black'}}
        onValueChange={onPressThemeButton}
        value={theme}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    alignItems: 'flex-start',
  },
});
