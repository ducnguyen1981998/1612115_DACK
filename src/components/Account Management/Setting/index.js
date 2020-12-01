import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, Dimensions } from 'react-native';
import SettingItem from './SettingItem';
import { ThemeContext } from '../../../provider/ThemeProvider';
import { themes } from '../../../constants/theme'

import Img from '../../../../assets/img/logo.jpg'

const index = (props) => {
    const ListSetting =[
        {
            "id":1,
            "title": "Account"
        },
        {
            "id":2,
            "title": "Subcription",
            "sub": "Free Pluralsight IQ(Limited Libary)"
        },
        {
            "id":3,
            "title": "Communication Preferences",
        },
        {
            "id":4,
            "title": "Default caption language",
            "sub": "English"
        },
        {
            "id":5,
            "title": "Lightnight",
            "radioButton": true
        },
        {
            "id":6,
            "title": "Require Wifi fow download",
            "radioButton": true
        },
        {
            "id":7,
            "title": "Recommended content push notifications",
            "sub": "Receive notification about content",
            "radioButton": true
        },
        {
            "id":8,
            "title": "Show quiz at the end of video",
            "radioButton": true
        },
        {
            "id":9,
            "title": "Download location",
            "sub": "Default location (4,26 GB of 23.49)",
        },
        {
            "id":10,
            "title": "Captions",
        },
        {
            "id":11,
            "title": "Notifications",
        },
        {
            "id":12,
            "title": "Advanced Options",
        },
        {
            "id":13,
            "title": "App version",
            "sub": "2.31.2"
        },
    ];



    const renderListItem = (Settings) => {
        return Settings.map(item => <SettingItem key={item.id} item={item} />)
    };

    return <ThemeContext.Consumer>
        {
            ({theme, setTheme})=>{
                return (
                    <View style={[styles.container, {backgroundColor: theme.colorsecondary}]}>
            
                        <ScrollView
                            contentContainerStyle={styles.scroolView}
                            showsVerticalScrollIndicator={false}
                        >
                            <View style={styles.containerAvatar}>
                                <View style={styles.containerImg}>
                                    <Image style={styles.img} source={Img} />
                                    <View style={styles.containerName}>
                                        <Text style={[styles.txtName, {color:theme.fontcolor}]}>Duc Nguyen</Text>
                                        <Text style={styles.txtSub}>@admin</Text>
                                    </View>
                                </View>
                            </View>
                            {renderListItem(ListSetting)}
                            <TouchableOpacity   style={[styles.btnLogin,{backgroundColor: theme.colorprimary}]}
                                                onPress={()=>props.navigation.navigate('Signin')
                            }>
                                <Text style={[styles.text,{backgroundColor: theme.colorprimary}]}>Sign out</Text>
                           </TouchableOpacity>
            
                        </ScrollView>
                    </View> 
                )
            }
        }
    </ThemeContext.Consumer>

    
}

export default index;

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingLeft:20,
        paddingTop:20,
        paddingRight:20
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
        marginLeft:10,
        marginBottom: 30
    },
    text:{
        color: 'rgba(255,255,255,1)',
        fontSize: 16,
        textAlign: 'center',
        textTransform:'uppercase',
        fontWeight:'bold'
    },

});
