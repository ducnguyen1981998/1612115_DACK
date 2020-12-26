import React from 'react'
import { StyleSheet, Text, View,ScrollView, Slider, ImageBackground } from 'react-native';
import Author from '../Main/Browse/Author/author';
import Path from '../Main/Home/Paths'
import Background from "../../../assets/img/bg.jpg";

const SkillDetail = (props) => {
    return (
        <ImageBackground source={Background} style={styles.backgroundContainer}>
            <ScrollView>
                <Path title={"Path"} navigation={props.navigation}/>
                <Author title={"Author"} navigation={props.navigation}/>
            </ScrollView>
        </ImageBackground>
    )
}

export default SkillDetail;

const styles = StyleSheet.create({
    backgroundContainer:{
        flex:1,
        height:null,
        width:null,
        justifyContent:'center',
        alignItems:'center'
    },
});

