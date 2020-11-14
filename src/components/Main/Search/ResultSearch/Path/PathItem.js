import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, Dimensions } from 'react-native';
import { Rating } from 'react-native-elements'
import { TouchableOpacity } from 'react-native-gesture-handler';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function SectionCoursesItem(props) {
    const { rating } = props;
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate("Course")}>
        <View style={styles.container}>
            <Image style={styles.img} source={props.item.path}/>
            <View style={styles.containerTxt}>
                <Text style={styles.txtTitle}>{props.item.pathName}</Text>
                <Text style={styles.txtAuthor}>{props.item.numCourses} courses</Text>
            </View>
        </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop:10,
        paddingBottom:10,
        flexDirection:'row',
        borderBottomColor: '#fff',
        borderBottomWidth: 1.
        
    },
    img:{
        flex: 0.3,
        height: Dimensions.get('window').height/9,
    },
    containerTxt:{
        flex: 0.7,
        marginLeft: 10,
        height: Dimensions.get('window').height/9,
        justifyContent:'center'

    },
    txtTitle:{
        fontWeight:'bold',
        fontSize: 16
    },
    txtAuthor:{
        fontSize: 12,
        fontWeight: 'normal'
    },
 
});
