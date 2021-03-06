import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions,TouchableOpacity } from 'react-native';
import { Rating } from 'react-native-elements';

export default function SectionCourseItem(props) {
    return (
        <TouchableOpacity onPress={()=> props.navigation.navigate("CourseDetail", {
            data: props.item
        })}>
        <View style={styles.container}>
            <Image style={styles.img} source={{uri: props.item.imageUrl}}/>
            <View style={styles.containerTxt}>
                <Text style={styles.txtTitle}>{props.item.title}</Text>
                <Text style={styles.txtAuthor}>{props.item["instructor.user.name"]}</Text>
                <View style={styles.info}>
                    <Text style={{fontSize:12}}>{props.item.level}</Text>
                    <Text style={{fontSize:12}}> ♦ </Text>
                    <Text style={{fontSize:12}}>{props.item.createdAt}</Text>
                    <Text style={{fontSize:12}}> ♦ </Text>
                    <Text style={{fontSize:12}}>{props.item.totalHours}</Text>
                </View>
                <View style={styles.rating}>
                    <Rating
                        type='custom'
                        imageSize={16}
                        startingValue={props.item.formalityPoint}
                        style={ styles.ratingStar}
                        ratingBackgroundColor= 'rgba(0,0,0,0)'
                    />
                    <Text> ({props.item.ratedNumber})</Text>
                </View>
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
        flexDirection:'row'
    },
    ratingStar:{
        alignItems:'flex-start',
    },
    
});