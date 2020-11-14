import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import {Rating} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Info = () => {
    const [isShowingAllText, setIsShowingAllText] = useState(false);
    return (
        <View style={styles.container}>
            <Text style={ styles.txtTitle}>Angular: Getting Started</Text>
            <View style={styles.containerListAuthor}>
                <View style={styles.containerAuthor}>
                    <Image style={styles.imgAuthor} source={require('../../../../assets/img/person.jpg')}/>
                    <Text style={styles.txtAuthor}>Deboral Kurata</Text>
                </View>
                <View style={styles.containerAuthor}>
                    <Image style={styles.imgAuthor} source={require('../../../../assets/img/person.jpg')}/>
                    <Text style={styles.txtAuthor}>Deboral Kurata</Text>
                </View>               
            </View>
            <View style={styles.info}>
                <Text>Beginner</Text>
                <Text> ♦ </Text>
                <Text>4 21 2020</Text>
                <Text> ♦ </Text>
                <Text>5,9h</Text>
                <Text> ♦ </Text>
                <Rating
                        type='custom'
                        imageSize={14}
                        // onFinishRating={this.ratingCompleted}
                        style={ styles.ratingStar}
                        ratingBackgroundColor= 'lightgray'
                    />
                <Text> (768)</Text>
            </View>
            {/* Bookmark Add To Channel Download */}
            <View style={styles.bttContainer}>
                <TouchableOpacity onPress={()=>{Alert.alert("Bookmark","Bookmark created")} }>
                <View style={styles.btt}>
                    <Icon name="ios-bookmarks" size={36} style={{alignSelf:'center'}}/>
                    <Text style={{fontWeight:"bold"}}>Bookmark</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{Alert.alert("Channel","Channel created")} }>
                <View style={styles.btt}>
                    <Icon name="ios-add" size={36} style={{alignSelf:'center'}}/>
                    <Text style={{fontWeight:"bold"}}>Add to Channel</Text>
                </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>{Alert.alert("Download","Download created")} }>
                <View style={styles.btt}>
                    <Icon name="ios-download" size={36} style={{alignSelf:'center'}}/>
                    <Text style={{fontWeight:"bold"}}>Download</Text>
                </View>
                </TouchableOpacity>
            </View>
            <View style={styles.column}>
                <Text style={styles.txtInfo} numberOfLines={isShowingAllText? undefined:3} >Angular has become one of most 
                widely used web development frameworks. This course, Angular Fundamentals, will teach you 
                Achieve the maximum speed possible on the Web Platform today, and take it further, via Web 
                Workers and server-side rendering.
                Angular puts you in control over scalability. Meet huge data requirements by building data 
                models on RxJS, Immutable.js or another push-model.</Text>
                <Button style={styles.bttMoreInfo} color={"#432577"} title={">"} onPress={()=> { setIsShowingAllText(!isShowingAllText)}}></Button>
            </View>
            <View style={styles.containerBtt}>
                <Button title={" Take a learning check"} color={"#432577"} style={styles.bttHead}></Button>
                <View style={{marginBottom: 10}}></View>
                <Button title={" View related paths & courses"} color={"#432577"}></Button>
            </View>
        </View>
    )
}

export default Info;

const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        margin:10
    },
    txtTitle:{
        fontWeight: 'bold',
        fontSize: 22
    },
    containerListAuthor:{
        flexDirection:'row'
    },
    containerAuthor:{
        height: 24,
        flexDirection:'row',
        backgroundColor:"lightgray",
        borderRadius: 12,
        marginRight: 6
    },
    imgAuthor:{
        width: 24,
        height: 24,
        borderRadius: 12,
        marginRight:3
    },
    txtAuthor:{
        marginRight: 12
    },
    info:{
        flexDirection:'row',
        marginTop:5,
        alignItems:'center'
    },
    bttContainer:{
        flexDirection: 'row',
        justifyContent:'space-around',
        marginTop:20
    },
    btt:{
        justifyContent:'center',
    },
    column:{
        flexDirection: 'row',
        justifyContent:"space-evenly",
        marginTop: 20
    },
    txtInfo:{
        flex: 0.9
    },
    bttMoreInfo:{
        flex: 0.1
    },
    containerBtt:{
        marginTop: 10,
    },
    bttHead:{
        marginBottom: 5
    }
});
