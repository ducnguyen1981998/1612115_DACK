import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, Dimensions } from 'react-native';
import { Rating } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function PathItem(props) {
    const { rating } = props;
    return (
        <TouchableOpacity onPress={()=> props.navigation.navigate("Course")}>
        <View style={styles.container}>
            <Image style={styles.img} source={props.item.img}/>
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
                        ratingBackgroundColor= 'rgba(0,0,0,0)'
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
