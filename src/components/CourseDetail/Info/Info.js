import React, {useState} from 'react'
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import {Rating} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import moment from 'moment'

const Info = (props) => {
    const [isShowingAllText, setIsShowingAllText] = useState(false);
    return (
        <View style={styles.container}>
            <Text style={ styles.txtTitle}>{props.data.title}</Text>
            <View style={styles.containerListAuthor}>
                <View style={styles.containerAuthor}>
                    <Image style={styles.imgAuthor} source={require('../../../../assets/img/person.jpg')}/>
                    <Text style={styles.txtAuthor}>{props.data.instructorName|| props.data["instructor.user.name"]}</Text>
                </View>             
            </View>
            <View style={styles.info}>
                <Text>{props.data.status}</Text>
                <Text> ♦ </Text>
                <Text>{moment(props.data.updatedAt).format("YYYY-MM-DD")}</Text>
                <Text> ♦ </Text>
                <Text>{props.data.totalHours}h</Text>
                <Text> ♦ </Text>
                <Rating
                        type='custom'
                        imageSize={14}
                        // onFinishRating={this.ratingCompleted}
                        style={ styles.ratingStar}
                        ratingBackgroundColor= 'lightgray'
                        startingValue={props.data.averagePoint}
                    />
                <Text>({props.data.ratedNumber})</Text>
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
                <Text style={styles.txtInfo} numberOfLines={isShowingAllText? undefined:3} >{props.data.description}</Text>
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
