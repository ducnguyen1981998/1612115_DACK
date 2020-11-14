import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import ListLessonItem from './LessonItem'

const ListLesson = () => {
    const ListLesson = [
        {
            id: 1,
            title: 'Course Overview',
            duration: '2:04',
            child:[
                {
                    "item": "Introduction",
                    "duration": "2:04"
                },
            ]
        },
        {
            id: 2,
            title: 'Getting Started with Angular',
            duration: '38:45',
            child:[
                {
                    "item": "Introduction",
                    "duration": "2:55"
                },
                {
                    "item": "Pratice Exercises",
                    "duration": "2:25"
                },
                {
                    "item": "Introduction to TypeScript",
                    "duration": "7:09"
                },
                {
                    "item": "Comparing Angular to angularJs",
                    "duration": "2:17"
                },
            ]
        },
        {
            id: 3,
            title: 'Creating and Communicating',
            duration: '33:32',
            child:[
                {
                    "item": "Introduction",
                    "duration": "0:42"
                },
                {
                    "item": "Pratice Exercises",
                    "duration": "6:10"
                },
                {
                    "item": "Introduction to TypeScript",
                    "duration": "6:47"
                },
                {
                    "item": "Comparing Angular to angularJs",
                    "duration": "1:49"
                },
            ]
        },
    ];

    const renderListItem = (ListLesson) => {
        return ListLesson.map(item => <ListLessonItem key={item.id} item={item}/>)
    };

    return (
        <View style={styles.container}>
            <ScrollView 
                horizontal={false} 
                contentContainerStyle={styles.scroolView}
                showsHorizontalScrollIndicator={false}
            >
                {renderListItem(ListLesson)}
            </ScrollView>
        </View>  
    )
}

export default ListLesson;

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
        flex:1
    },
    scroolView:{

    }
});
