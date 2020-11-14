import React from 'react'
import { StyleSheet, Text, View,ScrollView, Slider, ImageBackground } from 'react-native';
import SectionCourse from './SectionCourse/SectionCourse';
import Background from "../../../assets/img/bg.jpg";

const Browse = (props) => {
    return (
        <ImageBackground source={Background} style={styles.backgroundContainer}>
            <ScrollView>
                <SectionCourse title='Courses' navigation={props.navigation}/>
            </ScrollView>
        </ImageBackground>
    )
}

export default Browse;

const styles = StyleSheet.create({
    backgroundContainer:{
        flex:1,
        height:null,
        width:null,
    }, 
});
