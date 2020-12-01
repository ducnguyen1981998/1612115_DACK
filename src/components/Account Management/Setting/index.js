import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import SettingItem from './SettingItem';
import { logout } from '../../../services/authenticationService';

import Img from '../../../../assets/img/logo.jpg'

const index = (props) => {
    const ListSetting =[
        {
            "title": "Account"
        },
        {
            "title": "Subcription",
            "sub": "Free Pluralsight IQ(Limited Libary)"
        },
        {
            "title": "Communication Preferences",
        },
        {
            "title": "Default caption language",
            "sub": "English"
        },
        {
            "title": "Require Wifi fow streaming",
            "radioButton": true
        },
        {
            "title": "Require Wifi fow download",
            "radioButton": true
        },
        {
            "title": "Recommended content push notifications",
            "sub": "Receive notification about content",
            "radioButton": true
        },
        {
            "title": "Show quiz at the end of video",
            "radioButton": true
        },
        {
            "title": "Download location",
            "sub": "Default location (4,26 GB of 23.49)",
        },
        {
            "title": "Captions",
        },
        {
            "title": "Notifications",
        },
        {
            "title": "Advanced Options",
        },
        {
            "title": "App version",
            "sub": "2.31.2"
        },
    ];

    //Kiểm tra data
    const [status, setStatus] = useState(null);
    
    const renderListItem = (courses) => {
        return courses.map((item,index) => <SettingItem key={index} item={item}/>)
    };

    return (
        <View style={styles.container}>

            <ScrollView 
                contentContainerStyle={styles.scroolView}
                showsVerticalScrollIndicator={false}
            >
                <View style={styles.containerAvatar}>
                    <View style={styles.containerImg}>
                        <Image style={styles.img} source={Img} />
                        <View style={styles.containerName}>
                            <Text style={styles.txtName}>Duc Nguyen</Text>
                            <Text style={styles.txtSub}>7d4a5v6h8a</Text>
                        </View>
                    </View>
                </View>
                {renderListItem(ListSetting)}
                <TouchableOpacity style={styles.btnLogin}
               onPress={()=>
                {
                    setStatus(logout())
                    props.navigation.navigate('Signin')
                }}>

                    <Text style={styles.text}>Sign out</Text>
               </TouchableOpacity>

            </ScrollView>
        </View> 
    )
}

export default index;

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginLeft:20,
        marginTop:20,
        marginRight:20
    },
    containerAvatar:{
        flex:0.2
    },
    containerImg:{
        flexDirection:'row'
    },
    containerName:{
        marginLeft: 10
    },
    txtSub:{
        color:'rgba(0,0,0,0.3)'
    },
    txtName:{
        fontWeight:'bold'
    },
    img:{
        height: 50,
        width: 50
    },
    btnLogin:{
        width: Dimensions.get("window").width -55, 
        height: 45,
        borderRadius: 25,
        backgroundColor: '#432577',
        justifyContent:"center",
        alignItems:"center",
        marginTop: 20,
        marginLeft:10
    },
    text:{
        color: 'rgba(255,255,255,1)',
        fontSize: 16,
        textAlign: 'center',
        textTransform:'uppercase',
        fontWeight:'bold'
    },

});
