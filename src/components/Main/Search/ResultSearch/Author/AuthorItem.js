import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, Dimensions } from 'react-native';
import { Rating } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function SectionCoursesItem(props) {
    const { rating } = props;
    return (
        <TouchableOpacity onPress={() => { props.navigation.navigate("Course")}}>
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../../../../../assets/img/person.jpg')}/>
            <View style={styles.containerTxt}>
                <Text style={styles.txtTitle}>{props.item.author}</Text>
                <Text style={styles.txtAuthor}>{props.item.num} courses</Text> 
            </View>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop:6,
        paddingBottom:6,
        flexDirection:'row',
        borderBottomColor: '#fff',
        borderBottomWidth: 1.
        
    },
    img:{
        height: Dimensions.get('window').height/8,
        width: Dimensions.get('window').height/8,
        borderRadius: Dimensions.get('window').height/16
    },
    containerTxt:{
        marginLeft: 10,
        justifyContent:'center'
    },
    txtTitle:{
        fontSize: 16,
        
    },
    txtAuthor:{
        fontSize: 12,
        fontWeight: 'normal',
        color:'rgba(0,0,0,0.3)'
    },
    info:{
        flexDirection:'row',
    },
    rating:{
        flex:1,
        flexDirection:'row'
    },
    ratingStar:{
        alignItems:'flex-start',
    },
    
});
