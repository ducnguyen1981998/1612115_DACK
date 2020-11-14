import React, { Component, useState } from 'react';
import { Text, StyleSheet, View, Dimensions, TouchableOpacity, TouchableWithoutFeedback, ImageBackground } from 'react-native';
import {Rating, Overlay, Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';


const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function SectionCoursesItem(props) {
    const [visible, setVisible] = useState(false);
    const [src, setSrc] = useState('../../../../../assets/img/');

    const toggleOverlay = () => {
        setVisible(!visible);
    };
    // console.log(props.item.img);
    return (
        <TouchableOpacity onPress={()=> props.navigation.navigate("CourseDetail")}>
            <View style={styles.container}>
                
                <ImageBackground style={styles.img} source={props.item.img}>
                    <TouchableWithoutFeedback>
                        <Icon 
                        name="ellipsis-v" 
                        style={styles.iconMore} 
                        size={32} 
                        color='rgba(255,255,255,0.7)'
                        onPress={toggleOverlay}
                        />
                    </TouchableWithoutFeedback>
                    <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
                    </Overlay>    
                </ImageBackground>
                <View style={styles.containerTxt}>
                    <Text style={styles.txtTitle}>{props.item.title}</Text>
                    <Text style={styles.txtAuthor}>{props.item.author}</Text>
                    <View style={styles.info}>
                        <Text style={{fontSize:12}}>{props.item.level}</Text>
                        <Text style={{fontSize:12}}> ♦ </Text>
                        <Text style={{fontSize:12}}>{props.item.released}</Text>
                        <Text style={{fontSize:12}}> ♦ </Text>
                        <Text style={{fontSize:12}}>{props.item.duration}</Text>
                    </View>
                    <View style={styles.rating}>
                    <Rating
                        type='custom'
                        imageSize={16}
                        // onFinishRating={this.ratingCompleted}
                        style={ styles.ratingStar}
                        tintColor={"rgba(0,0,0,0.3)"}
                        startingValue={props.item.star}
                    />
                    <Text> ({props.item.num})</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 10,
        marginRight: 5,
        width: Width/1.5 - 10,
        height: Height/3,
        backgroundColor: 'rgba(0,0,0,0.3)'
    },
    img:{
        flex: 0.6,
        width: Width/1.5 - 10,
        alignItems:'flex-end'
    },
    iconMore:{
        flex:1,
        marginRight: 10,
        marginTop:10
    },
    containerTxt:{
        flex: 0.4,
        margin: 10
    },
    txtTitle:{
        fontWeight:'bold',
        fontSize: 14
    },
    txtAuthor:{
        fontSize: 12,
        fontWeight: 'normal'
    },
    info:{
        flexDirection:'row',
    },
    rating:{
        flex:1,
        flexDirection:'row',
        alignItems:'center'
    },
    ratingStar:{
        alignItems:'flex-start',
    },

});
