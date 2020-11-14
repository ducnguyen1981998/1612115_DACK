import React from 'react';
import { StyleSheet, Text, View, ImageBackground  } from 'react-native';

const SlideItem = (props) => {
    const { slide } = props;
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.imgbg} source={require('../../../../../assets/img/newrelease1.jpg')}>
                <Text>{props.slide.titleSlide}</Text>
            </ImageBackground>
        </View>
    )
}

export default SlideItem;

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginLeft: 5,
        marginTop: 10
    },
    imgbg:{
        width: 100,
        height:100,
        alignItems: "center",
    }
});
