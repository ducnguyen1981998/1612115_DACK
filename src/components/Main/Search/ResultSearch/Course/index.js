import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView, Image, Dimensions } from 'react-native';
import CoursesItem from './CourseItem';
import Data from '../../../../../../constraint/data';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function SectionCourses(props){


    const renderListItem = (courses) => {
        return courses.map(item => <CoursesItem key={item.id} item={item} navigation={props.navigation}/>)
    };

    return (
        <View style={styles.container}>
            <View style={styles.containertxt}>
                <Text style={styles.txt}>Skill Levels</Text>
                <Text style={styles.txt}>87 Results</Text>
            </View>
            <ScrollView 
                // horizontal={true} 
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
        marginLeft: 10,
        marginRight:10,
        marginTop:10,
        flex:1
    },
    containertxt:{
        height:20,
        flexDirection:'row',
        justifyContent:'space-between',
    },
    txt:{
        fontSize: 12,
    },
    scroolView:{
    }
});
