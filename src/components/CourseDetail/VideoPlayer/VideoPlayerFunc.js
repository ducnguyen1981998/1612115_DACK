import React, { useState, useRef } from 'react';
import { Text, StyleSheet, View, Dimensions, Animated } from 'react-native';
// import {Video} from 'expo-av';
// import LightVideo from '../../../../assets/video/1612115_Assigment2.mp4';
// import Icon from 'react-native-vector-icons/Ionicons';
import YoutubePlayer from 'react-native-youtube-iframe';

const VideoPlayer = (props) => {
    console.log(props);
    const state={
        error: false,
        buffering: true,
        animated: new Animated.Value(0)
    }

    const playerRef = useRef(null);
    const [playing, setPlaying] = useState(true);
    
    const handleError =(meta) =>{
        const {error: {code}} =meta;
        let error = "An error occurred playing this video";

        switch(code){
            case -11800:
                error = "Could not load video from URL";
                break;
        }
    }
    const {width} =Dimensions.get("window");
    const height = width*0.5625;
    const {error} =this.state;
    return (
        <View style={styles.container}>
            <YoutubePlayer
                ref={playerRef}
                height={300}
                width={400}
                videoId={"AVAc1gYLZK0"}
                play={playing}
                onChangeState={event => console.log(event)}
                onReady={() => console.log("ready")}
                onError={e => console.log(e)}
                onPlaybackQualityChange={q => console.log(q)}
                volume={50}
                playbackRate={1}
                playerParams={{
                    cc_lang_pref: "us",
                    showClosedCaptions: true
                }}
                />
        </View>
    )
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
