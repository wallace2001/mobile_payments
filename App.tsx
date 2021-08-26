/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { COLORS } from './constants/theme';
import { AppProvider } from './src/context/appContext';
import { Payment } from './src/pages';
const App = () => {
  return (
    <AppProvider>
      <SafeAreaView style={styles.container}>
        <Payment />
      </SafeAreaView>
    </AppProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});

export default App;
