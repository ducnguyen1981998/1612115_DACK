import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, Text, View, ImageBackground,Dimensions  } from 'react-native';
import { Tile } from 'react-native-elements';
import { CourseContext } from "../../../../provider/Courses/CourseProvider";


const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;


const SlideItemBig = (props) => {
    const { slide } = props;
    const coursesContext = useContext(CourseContext);
    //const { clickToCourse, setClickToCourse } = useState(false);

    useEffect( () =>{
        //console.log("CourseContext isDone: ", coursesContext.state.isDone )
        if(coursesContext.state.isDone){
            props.navigation.navigate('Course'); 
        }
    }, [coursesContext.state.isDone]);

    return (
        <View>
        <Tile
        imageSrc={require('../../../../../assets/img/recommend.jpg')}
        height={Dimensions.get("window").height/7}
        width={Dimensions.get("window").width-20}
        title="Recommend for you"
        containerStyle={{alignSelf:'center', marginTop: 20}}
        titleStyle={{textTransform:'uppercase'}}
        activeOpacity={0.6}
        onPress={()=> {
            coursesContext.course("top-rate")
        }}
        featured
        />
        <Tile
        imageSrc={require('../../../../../assets/img/newrelease.jpg')}
        height={Dimensions.get("window").height/7}
        width={Dimensions.get("window").width-20}
        title="New release"
        containerStyle={{alignSelf:'center', marginTop: 10}}
        titleStyle={{textTransform:'uppercase'}}
        activeOpacity={0.6}
        onPress={()=> {
            coursesContext.course("top-new")
        }}
        featured
        />
        </View>
    )
}

export default SlideItemBig;

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin: 10
    },
    imgbg:{
        flex: 1,
        width: Width-20,
        height: 100,
        alignItems: "center",
        justifyContent:"center"
    },
    txt:{
        flex:1,
        color:'#fff',
        fontSize:20,
        textTransform: 'uppercase',
        
    }
});
