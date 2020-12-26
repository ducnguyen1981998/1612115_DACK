import React, { Component, useContext } from 'react';
import { Text, StyleSheet, View, ScrollView, Image, Dimensions, TouchableOpacity, ActivityIndicator } from 'react-native';
import SectionCoursesItem from './section-courses-item';
import Data from '../../../../../constraint/data';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../../../../provider/ThemeProvider';
import { themes } from '../../../../constants/theme';
import { color } from 'react-native-reanimated';

import { LikeCourseContext } from '../../../../provider/Courses/LikeCoureProvider';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function SectionCourses(props){ 

    //const likeCourseContext = useContext(LikeCourseContext);

    // console.log("props: ", props.data);
    const renderListItem = (courses) => {
        return courses.map(item => <SectionCoursesItem key={item.id} item={item} navigation={props.navigation}/>)
    };


    return <ThemeContext.Consumer>
    {
        ({theme,setTheme})=>{
            
            return (
                <View style={styles.container}>
                    <View style={styles.container1}>
                        <Text style={[styles.txt, {color: theme.fontcolor}]}>{props.title}</Text>
                        <TouchableOpacity onPress={()=> props.navigation.navigate("Course")}>
                        <Icon name='ios-arrow-forward' size={20} textAlign="center" color={theme.fontcolor1} style={[styles.icon, {backgroundColor: theme.fontcolor}]}/>
                        </TouchableOpacity>
                    </View>
                    <ScrollView 
                        key={props.key}
                        horizontal={true} 
                        contentContainerStyle={styles.scroolView}
                        showsHorizontalScrollIndicator={false}
                    >
                        {renderListItem(props.data.state.category)}
                    </ScrollView>
                </View>  
            )
        }
    }
    </ThemeContext.Consumer>   
}

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
        flex:1,
    },
    container1:{
        flexDirection:'row',
        justifyContent: 'space-between',
        marginLeft:10
    },
    txt:{
        fontSize: 18,
        fontWeight:'bold',
        opacity: 0.7
        // flex:0.2
    },
    icon:{
        textAlign:'center',
        marginRight: 10,
        height: 24,
        width:24,
        opacity:0.5,
        borderRadius:12
    },
    scroolView:{
        marginLeft:10
    }
});
