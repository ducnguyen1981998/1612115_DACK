import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, Image } from 'react-native'
import SectionCourseItem from './SectionCourseItem';
import Data from '../../../../constraint/data';

export default function SectionCourse(props){

    const renderListItem = (courses) => {
        return courses.map(item => <SectionCourseItem key={item.id} item={item} navigation={props.navigation}/>)
    };

    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Text style={styles.txt}>{props.title}</Text>
                {/* <Image style={styles.img} source={require('../../../../assets/img/')}></Image> */}
            </View>
            <ScrollView
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
        justifyContent: 'space-between'
    },
    txt:{
        fontSize: 18,
        marginLeft:10,
        fontWeight:'bold'
        // flex:0.2
    },
    img:{
        marginRight: 5
    }
});
