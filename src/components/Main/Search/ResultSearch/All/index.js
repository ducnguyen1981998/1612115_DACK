import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView, Image, Dimensions } from 'react-native';
import CoursesItem from '../Course/CourseItem';
import AuthorItem from '../Author/AuthorItem';
import PathItem from '../Path/PathItem';
import Data from '../../../../../../constraint/data';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function SectionCourses(props){

    const renderListCourseItem = (courses) => {
        return courses.map(item => <CoursesItem key={item.id} item={item} navigation={props.navigation}/>)
    };
    const renderListAuthorItem = (courses) => {
        return courses.map(item => <AuthorItem key={item.id} item={item} navigation={props.navigation}/>)
    };
    const renderListPathItem = (courses) => {
        return courses.map(item => <PathItem key={item.id} item={item} navigation={props.navigation}/>)
    };

    return (
        <View style={styles.container}>
            <ScrollView 
                // horizontal={true} 
                contentContainerStyle={styles.scroolView}
                showsHorizontalScrollIndicator={false}
            >
                <View style={styles.containertxt}>
                    <Text style={styles.txtMain}>Courses</Text>
                    <Text style={styles.txtSub}>150 Results</Text>
                </View>
                {renderListCourseItem(Data)}
                <View style={styles.containertxt}>
                    <Text style={styles.txtMain}>Path</Text>
                    <Text style={styles.txtSub}>75 Results</Text>
                </View>
                {renderListPathItem(Data)}
                <View style={styles.containertxt}>
                    <Text style={styles.txtMain}>Author</Text>
                    <Text style={styles.txtSub}>30 Results</Text>
                </View>
                {renderListAuthorItem(Data)}

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
        marginTop: 5
    },
    txtMain:{
        fontSize: 16,
    },
    scroolView:{
    }
});
