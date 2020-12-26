import React, { Component, useState } from 'react';
import { Text, StyleSheet, View, Dimensions, TouchableOpacity, TouchableWithoutFeedback, ImageBackground } from 'react-native';
import {Rating, Overlay, Button} from 'react-native-elements'
import moment from 'moment';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemeContext } from '../../../../provider/ThemeProvider';
import { themes } from '../../../../constants/theme';


const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function SectionCoursesItem(props) {
    const [visible, setVisible] = useState(false);
    const [src, setSrc] = useState('../../../../../assets/img/');

    const toggleOverlay = () => {
        setVisible(!visible);
    };
    // console.log(props.item.img);
    return <ThemeContext.Consumer>
            {
                ({theme,setTheme})=>{
                    // setTheme(themes.dark)
                    return (
                        <TouchableOpacity onPress={()=> {
                            props.navigation.navigate("CourseDetail", {
                                data: props.item
                            })}
                        }>
                            <View style={[styles.container, {backgroundColor: theme.colorthird }]}>
                                <ImageBackground style={styles.img} source={{uri: props.item.imageUrl}}>
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
                                    <Text style={styles.txtAuthor}>{props.item.instructorName}</Text>
                                    <View style={styles.info}>
                                        <Text style={{fontSize:12}}>{props.item.status}</Text>
                                        <Text style={{fontSize:12}}> ♦ </Text>
                                        <Text style={{fontSize:12}}>{moment(props.item.updatedAt).format("YYYY-MM-DD")}</Text>
                                        <Text style={{fontSize:12}}> ♦ </Text>
                                        <Text style={{fontSize:12}}>{props.item.totalHours}</Text>
                                    </View>
                                    <View style={styles.rating}>
                                    <Rating
                                        type='custom'
                                        imageSize={16}
                                        // onFinishRating={this.ratingCompleted}
                                        style={ styles.ratingStar}
                                        tintColor={"rgba(0,0,0,0.3)"}
                                        startingValue={props.item.formalityPoint}
                                    />
                                    <Text> ({props.item.ratedNumber})</Text>
                                    </View>
                                </View>
                            </View>
                        </TouchableOpacity>
                    )
                }
            }
            </ThemeContext.Consumer> 
    
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        marginTop: 10,
        marginRight: 5,
        width: Width/1.5 - 10,
        height: Height/3,
    },
    img:{
        flex: 0.6,
        width: Width/1.5 - 10,
        alignItems:'flex-end',
    },
    iconMore:{
        flex:1,
        marginRight: 10,
        marginTop:10
    },
    containerTxt:{
        flex: 0.4,
        margin: 10,
    },
    txtTitle:{
        fontWeight:'bold',
        fontSize: 14,
        opacity:0.6
    },
    txtAuthor:{
        fontSize: 12,
        opacity:0.7
    },
    info:{
        flexDirection:'row',
        opacity:0.5
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
