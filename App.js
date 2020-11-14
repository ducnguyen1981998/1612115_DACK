import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation';

const App = () => {
  return <Navigation style={styles.navigation} />;
};

const styles = StyleSheet.create({
  navigation:{
    flex:1
  }
});

export default App;
