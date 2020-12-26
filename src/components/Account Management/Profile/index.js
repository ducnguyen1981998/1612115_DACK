import React, {Component, useContext} from 'react'
import { StyleSheet, Text, View, Image, Alert, Button, TextInput } from 'react-native';
import Person from '../../../../assets/img/person1.jpg'
import Icon from 'react-native-vector-icons/Ionicons';
import Author from '../../Main/Browse/Author/author'

import Day from '../../../../assets/icon/Day.jpg';
import Time from '../../../../assets/icon/time.jpg';
import MostViewed from '../../../../assets/icon/mostviewed.jpg';

import { AuthenticationContext } from '../../../provider/AuthenticationProvider';

const index = (props) => {
    const authenticationContext = useContext(AuthenticationContext);
    return (
        <View style={ styles.container}>
            <View style={ styles.containerAvatar}>
                <Image source={{uri: authenticationContext.state.userInfo["avatar"]}} style={styles.imgProfile}/>
                <Text style={styles.txtName}>{authenticationContext.state.userInfo["name"]}</Text>
                <Text style={styles.txtJob}>{authenticationContext.state.userInfo["email"]}</Text>
            </View>
            <View style={styles.container1}>
                <View style={styles.containerInfo}>
                    {/* <Icon style={styles.icon} name="ios-list-box" size={48}/> */}
                    <Image source={Day} style={styles.icon}/>
                    <View style={ styles.containerTxt}>
                        <Text style={ styles.txtTitle}>Totals activity days</Text>
                        <Text style={styles.txtInfo}>1024 day streak</Text>
                    </View>
                </View>
                <View style={styles.containerInfo}>
                    {/* <Icon style={styles.icon} name="ios-list-box" size={48}/> */}
                    <Image source={Time} style={styles.icon}/>
                    <View style={ styles.containerTxt}>
                        <Text style={ styles.txtTitle}>Most activity time </Text>
                        <Text style={styles.txtInfo}>7:00 AM</Text>
                    </View>
                </View>
                <View style={styles.containerInfo}>
                    {/* <Icon style={styles.icon} name="ios-list-box" size={48}/> */}
                    <Image source={MostViewed} style={styles.icon}/>
                    <View style={ styles.containerTxt}>
                        <Text style={ styles.txtTitle}>Most viewed subject</Text>
                        <Text style={styles.txtInfo}>N/A</Text>
                    </View>
                </View>                
            </View>
            <View style={styles.containerAuthor}>
                <Author title={"Author"} navigation={props.navigation}/>
            </View>
             
        </View>
    )
}

export default index

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems:'center'
    },
    containerAvatar:{
        flex:0.6,
        alignItems:'center',
        marginTop: 30,   
    },
    containerAuthor:{
        flex:0.5
    },
    imgProfile:{
        height:120,
        width:120,
        borderRadius: 60
    },
    txtName:{
        // color: "white",
        fontSize: 22,
        marginTop:12
    },
    txtJob:{
         color: "#626FB4",
        fontSize: 16,
        marginTop:4
    },

    containerInfo:{
        flexDirection:'row',
        marginLeft:30
    },
    icon:{
        height:40,
        width:36,
    },
    containerTxt:{
        marginLeft: 10
    },
    txtTitle:{
        color: "#626FB4",
        fontSize: 18,
    },
    txtInfo:{
        color: "#50D9EA",
        fontSize: 12,
        marginTop:2
    },
    txtTitleSub:{
        color: 'rgba(0,0,0,0.7)',
        fontWeight:'bold',
        fontSize:25,
        marginTop: 20
    }
});
