import React, { Component, useContext } from 'react'
import { Text, StyleSheet, View, ScrollView, Dimensions, ImageBackground, ActivityIndicator } from 'react-native';
import Background from "../../../../assets/img/bg.jpg";
import SectionCourses from './SectionCourses/section-courses';
import Path from './Paths';
import { ThemeContext } from '../../../provider/ThemeProvider';
import { themes } from '../../../constants/theme';

import { LikeCourseContext } from '../../../provider/Courses/LikeCoureProvider';


export default function Home(props) { 

    const likeCourseContext = useContext(LikeCourseContext);
    //console.log(" LikeCourseContext: ", likeCourseContext);

    return <ThemeContext.Consumer>
    {
        ({theme,setTheme})=>{
            return (
                <View style={[styles.backgroundContainer, {backgroundColor: theme.colorsecondary}]}>
                    { !likeCourseContext.state.category && <ActivityIndicator size="large" color="red"/>}
                    { likeCourseContext.state.category &&
                    <ScrollView >
                        <SectionCourses 
                            key={1} 
                            title={"Continue Learning"} 
                            navigation={props.navigation} 
                            data = { likeCourseContext }
                        />
                        <SectionCourses 
                            key={2} 
                            title={"Recommend for you"} 
                            navigation={props.navigation} 
                            data = { likeCourseContext }
                        />
                        <SectionCourses 
                            key={2} 
                            title={"My channel"} 
                            navigation={props.navigation} 
                            data = { likeCourseContext }
                        />
                        {/* <Path title={"My paths"} navigation={props.navigation}/> */}
                    </ScrollView>
                    }
                </View>  
            )
        }
    }
    </ThemeContext.Consumer> 
    
};

const styles = StyleSheet.create({
    backgroundContainer:{
        flex:1,
        height:null,
        width:null,
        justifyContent:'center',
        alignItems:'center',
    }, 
});
