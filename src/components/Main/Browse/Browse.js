import React from 'react'
import { StyleSheet, Text, View,ScrollView, Slider, ImageBackground } from 'react-native';
import PopularSkill from './PopularSkills/PopularSkills';
import Slide from './Slide/Slide';
import SlideBig from './Slide/SlideBig';
import Author from './Author/author';
import Background from "../../../../assets/img/bg.jpg";


const Browse = (props) => {
    return (
        <ImageBackground source={Background} style={styles.backgroundContainer}>
            <ScrollView>
                <SlideBig title={'Recommend for you'} navigation={props.navigation}/>
                <PopularSkill title={'PopularSkill'} navigation={props.navigation}/>
                <Author title={"Author"} navigation={props.navigation}/>
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
        justifyContent:'center',
        alignItems:'center'
    },
});
