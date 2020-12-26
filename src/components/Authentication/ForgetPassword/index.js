import React, { Component } from 'react';
import { Text, StyleSheet, View, ImageBackground, Image, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { ThemeContext } from '../../../provider/ThemeProvider';
import { themes } from '../../../constants/theme';

import Background from "../../../../assets/img/bg.jpg";
import Logo from '../../../../assets/img/logo.png';

const {width: Width}= Dimensions.get("window");

export default class index extends Component {
    constructor(props){
        super(props)
        this.state={
            showPass: true,
            press: false
        }
    };

    render() {
        return <ThemeContext.Consumer>
        {
            ({theme,setTheme})=>{
                //setTheme(themes.dark)
                return (
                    <ImageBackground source={Background} style={styles.backgroundContainer}>
                        <View style={styles.form}>
                             <Text style={[styles.txtHeader, {color: theme.fontcolor1}]}> Forgot your password?</Text>
                             <Text style={[styles.txtSub, {color: theme.fontcolor1}]}> Enter your email to find your account.</Text>
                             <Text style={[styles.txtLabel, {color: theme.fontcolor1}]}>Email adress</Text>
                             <TextInput
                                 style={[styles.txtInpEmail,{borderBottomColor: theme.fontcolor1}]}
                                 placeholderTextColor={theme.fontcolor}
                                 underlineColorAndroid='transparent'
                             />
                             <TouchableOpacity style={styles.btt}
                             onPress={()=> {this.props.navigation.navigate("Signin")}}>
                                 <Icon name='ios-arrow-forward' size={25} textAlign="center" color={theme.fontcolor1} style={[styles.icon, {backgroundColor: theme.colorprimary}]}/>
                             </TouchableOpacity>
                        </View>
                    </ImageBackground>
                )
            }
        }
        </ThemeContext.Consumer>
    }
}

const styles = StyleSheet.create({
    backgroundContainer:{
        display:'flex',
        flex:1,
        height:null,
        width:null,
        justifyContent:'center',
        alignItems:'center'
    },
    form:{
        flex: 1,
        marginTop: 90,
        paddingLeft: 20,
        paddingRight: 20
    },
    txtHeader:{
        fontSize: 28,
        fontWeight:'300'
    },
    txtSub:{
        fontSize: 16,
        marginTop:10,
        marginBottom:60
    },
    txtLabel:{
        fontSize: 14,
        marginTop:10,
        textTransform: "uppercase"
    },
    txtInpEmail:{
        borderBottomWidth:1,
    },
    btt:{
        alignItems:'flex-end',
        position:'absolute',
        right: 20,
        bottom:30,

    },
    icon:{
        textAlign:'center',
        paddingTop:10,
        height: 50,
        width:50,
        borderRadius: 25,
        opacity:0.7
    }

});
