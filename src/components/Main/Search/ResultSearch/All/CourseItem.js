import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, Dimensions } from 'react-native';
import { Rating } from 'react-native-elements'

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function SectionCoursesItem(props) {
    const { rating } = props;
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../../../../../assets/img/newrelease1.jpg')}/>
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
                        style={ styles.ratingStar}
                        ratingBackgroundColor= 'lightgray'
                    />
                    <Text> (768)</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingTop:10,
        paddingBottom:10,
        flexDirection:'row',
        borderBottomColor: '#03bafc',
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
