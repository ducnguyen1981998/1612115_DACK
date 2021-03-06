import React from 'react'
import { StyleSheet, Text, View,ScrollView, Slider, ImageBackground } from 'react-native';
import SectionCourse from './SectionCourse/SectionCourse';
import Background from "../../../assets/img/bg.jpg";

const Course = (props) => {
    // console.log(props.route);
    return (
        <ImageBackground source={Background} style={styles.backgroundContainer}>
            <ScrollView>
                <SectionCourse title='Courses' {...props}/>
            </ScrollView>
        </ImageBackground>
    )
}

export default Course;

const styles = StyleSheet.create({
    backgroundContainer:{
        flex:1,
        height:null,
        width:null,
    }, 
});
