import React from 'react'
import { StyleSheet, Text, View,ScrollView, Slider, ImageBackground} from 'react-native';
// import Header from '../Main/Header/Header';
import Background from "../../../assets/img/bg.jpg";
import Info from './Info/Info';
import ListLesson from './ListLesson/ListLesson';
import VideoPlayer from './VideoPlayer/VideoPlayer'

const Browse = () => {
    return (
        <ImageBackground source={Background} style={styles.backgroundContainer}>
            <ScrollView>
                <VideoPlayer/>
                <Info/>
                <ListLesson/>
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
