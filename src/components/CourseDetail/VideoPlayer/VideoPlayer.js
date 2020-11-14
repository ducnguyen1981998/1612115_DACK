import React, { Component } from 'react';
import { Text, StyleSheet, View, Dimensions, Animated } from 'react-native';
import {Video} from 'expo-av';
import LightVideo from '../../../../assets/video/1612115_Assigment2.mp4';
import Icon from 'react-native-vector-icons/Ionicons'



export default class VideoPlayer extends Component {
    state={
        error: false,
        buffering: true,
        animated: new Animated.Value(0)
    }
    
    handleError =(meta) =>{
        const {error: {code}} =meta;
        let error = "An error occurred playing this video";

        switch(code){
            case -11800:
                error = "Could not load video from URL";
                break;
        }
    }

    render() {
        const {width} =Dimensions.get("window");
        const height = width*0.5625;
        const {error} =this.state;
        return (
            <View style={styles.container}>
                <View style={error? styles.error:undefined}>
                    <Video
                    source={LightVideo}
                    resizeMode="contain"
                    style={styles.video}
                    onError={this.handleError}
                    onLoadStart={this.onLoadStart}
                    /> 
                    <View style={styles.videoCover}>
                        {error && <Icon name="exclamation-triangle" size={30} color="red"/>}
                        {error && <Text>{error}</Text>}
                    </View>
                </View>
            </View>
        )
    }
};

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    video:{
        height: Dimensions.get("window").height/3,
        width: Dimensions.get("window").width,
    },
    videoCorver:{
        alignItems:'center',
        justifyContent:'center',
        position:"absolute",
        left:0,
        right:0,
        top:0,
        bottom:0,
        backgroundColor: "rgba(255,255,255,0.9)"
    },
    error:{
        backgroundColor:"#000"
    }
});
