import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/navigation';
import { ThemeProvider} from './src/provider/ThemeProvider';
import { SkillProvider} from './src/provider/SkillProvider';
import {AuthorProvider} from './src/provider/AuthorProvider';
import {AuthenticationProvider} from './src/provider/AuthenticationProvider';

//Top Courses
import {CourseProvider, CourseContext} from './src/provider/Courses/CourseProvider';
import { LikeCourseProvider } from './src/provider/Courses/LikeCoureProvider';

const App = () => {
  
  return ( 
  <ThemeProvider>
    <SkillProvider>
      <AuthorProvider>
        <AuthenticationProvider>

          {/* Top Courses */}
          <CourseProvider>
            <LikeCourseProvider>
              <Navigation style={styles.navigation} />
            </LikeCourseProvider>
          </CourseProvider>
          
        </AuthenticationProvider>
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
