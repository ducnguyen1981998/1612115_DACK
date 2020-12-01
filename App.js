import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation';
import { ThemeProvider} from './src/provider/ThemeProvider';
import { SkillProvider} from './src/provider/SkillProvider';
import {AuthorProvider} from './src/provider/AuthorProvider';

const App = () => {
  return ( 
  <ThemeProvider>
    <SkillProvider>
      <AuthorProvider>
        <Navigation style={styles.navigation} />
      </AuthorProvider>
    </SkillProvider>
  </ThemeProvider>
)};

const styles = StyleSheet.create({
  navigation:{
    flex:1
  }
});

export default App;
