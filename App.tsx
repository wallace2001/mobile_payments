/* eslint-disable prettier/prettier */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import { COLORS } from './constants/theme';
import { AppProvider } from './src/context/appContext';
import { Router } from './src/routes';
const App = () => {
  return (
    <AppProvider>
      <SafeAreaView style={styles.container}>
        <Router />
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
