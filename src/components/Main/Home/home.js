import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Dimensions, ImageBackground } from 'react-native';
import Background from "../../../../assets/img/bg.jpg";
import SectionCourses from './SectionCourses/section-courses';
import Path from './Paths';

export default function Home(props) {
    return (
        <ImageBackground source={Background} style={styles.backgroundContainer}>
            <ScrollView>
                <SectionCourses title={"Continue Learning"} navigation={props.navigation}/>
                <SectionCourses title={" Developer"} navigation={props.navigation}/>
                <SectionCourses title={"My channels"} navigation={props.navigation}/> 
                <Path title={"My paths"} navigation={props.navigation}/>
            </ScrollView>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    backgroundContainer:{
        flex:1,
        height:null,
        width:null,
        justifyContent:'center',
        alignItems:'center'
    }, 
});
