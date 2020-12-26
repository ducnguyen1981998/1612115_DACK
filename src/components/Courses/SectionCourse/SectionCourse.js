import React, { Component, useContext } from 'react'
import { Text, StyleSheet, View, ScrollView, Image } from 'react-native'
import SectionCourseItem from './SectionCourseItem';
import { mocks } from '../../../constants';
import { AuthorContext, AuthorProvider} from '../../../provider/AuthorProvider';
import { CourseContext } from '../../../provider/Courses/CourseProvider';

export default function SectionCourse(props){
    // console.log("Route:", props.route);
    // console.log("Props: ", props.navigation);

    const Courses = useContext(CourseContext);

    //console.log("SectionCourse: ", Courses);
    const renderListItem = (courses, idSelected) => {
            return courses
            .map(item => <SectionCourseItem key={item.id} item={item} navigation={props.navigation}/>)
        // if(idSelected){
        //     return courses
        //     .filter(item => item.idauthor == idSelected)
        //     .map(item => <SectionCourseItem key={item.IDCourse} item={item} navigation={props.navigation}/>)
        // }
    };

    return <AuthorContext.Consumer>
        {
            ({author,setAuthor,idSelected}) => {
                //console.log(idSelected)
                return (
                    <View style={styles.container}>
                        <View style={styles.container1}>
                            {/* <Text style={styles.txt}>{props.title}</Text> */}
                            {/* <Image style={styles.img} source={require('../../../../assets/img/')}></Image> */}
                        </View>
                        <ScrollView
                            contentContainerStyle={styles.scroolView}
                            showsHorizontalScrollIndicator={false}
                        >
                            {renderListItem(Courses.state.category, idSelected)}
                        </ScrollView>
                    </View>  
                )
            }
        }
    </AuthorContext.Consumer>
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
