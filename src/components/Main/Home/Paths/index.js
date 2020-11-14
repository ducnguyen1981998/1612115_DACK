import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import Path from './pathItem';
import Data from '../../../../../constraint/data';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function index(props){ 

    const renderListItem = (courses) => {
        return courses.map(item => <Path key={item.id} item={item} navigation={props.navigation}/>)
    };

    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Text style={styles.txt}>{props.title}</Text>
                <TouchableOpacity onPress={()=> props.navigation.navigate("Course")}>
                    <Image source={require('../../../../../assets/icon/arrowright.png')} style={styles.img} />
                </TouchableOpacity>           
            </View>
            <ScrollView 
                horizontal={true} 
                contentContainerStyle={styles.scroolView}
                showsHorizontalScrollIndicator={false}
            >
                {renderListItem(Data)}
            </ScrollView>
        </View>  
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
        flex:1
    },
    container1:{
        flexDirection:'row',
        justifyContent: 'space-between',
        marginLeft:10
    },
    txt:{
        fontSize: 18,
        fontWeight:'bold'
        // flex:0.2
    },
    img:{
        marginRight: 5,
        height:20,
        width:20,
        opacity:0.5
    },
    scroolView:{
        marginLeft:10
    }
});
