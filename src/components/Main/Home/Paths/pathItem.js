import React, { Component, useState } from 'react';
import { Text, StyleSheet, View, Dimensions,Image, TouchableOpacity, TouchableWithoutFeedback, ImageBackground } from 'react-native';
import {Rating, Overlay, Button} from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome';
import { ThemeContext } from '../../../../provider/ThemeProvider';
import { themes } from '../../../../constants/theme';


const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function pathItem(props) {
    const [visible, setVisible] = useState(false);

    return (
        <TouchableOpacity onPress={()=> props.navigation.navigate("Course")}>
            <View style={styles.container}>
                <Image style={styles.img} source={props.item.img}>  
                </Image>
                <View style={styles.containerTxt}>
                    <Text style={styles.txtTitle}>{props.item.pathname}</Text>
                    <Text style={styles.txtAuthor}>{props.item.pathnum} courses</Text> 
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


});
