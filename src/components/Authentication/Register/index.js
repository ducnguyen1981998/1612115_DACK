import React, { Component } from 'react';
import { Text, StyleSheet, View, ImageBackground, Image, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import Background from "../../../../assets/img/bg.jpg";
import Logo from '../../../../assets/img/logo.png';
import { TextInput} from 'react-native-gesture-handler';

const {width: Width}= Dimensions.get("window");

export default class index extends Component {
    constructor(props){
        super(props)
        this.state={
            showPass: true,
            press: false
        }
    };

    update = () =>{
        this.setState({
            showPass: !this.state.showPass
        })
    }

    render() {
        return (
           <ImageBackground source={Background} style={styles.backgroundContainer}>
               <View style={styles.logoContainer}>
                    <Image source={Logo} style={styles.logo}/>
               </View>
               <View style={styles.inputContainer}>
                   <Icon 
                        name={'ios-person'} 
                        size={28} 
                        color={'rgba(255,255,255,0.7)'}
                        style={styles.inputIcon}
                   />
                   <TextInput
                        style={styles.input}
                        placeholder={"Username"}
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                        underlineColorAndroid='transparent'
                   />
               </View>
               <View style={styles.inputContainer}>
                   <Icon 
                        name={'ios-lock'} 
                        size={26} 
                        color={'rgba(255,255,255,0.7)'}
                        style={styles.inputIcon}
                   />
                   <TextInput
                        style={styles.input}
                        placeholder={"Password"}
                        secureTextEntry={this.state.showPass}
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                        underlineColorAndroid='transparent'
                   />
               </View>
               <View style={styles.inputContainer}>
                   <Icon 
                        name={'ios-lock'} 
                        size={26} 
                        color={'rgba(255,255,255,0.7)'}
                        style={styles.inputIcon}
                   />
                   <TextInput
                        style={styles.input}
                        placeholder={"Verify Password"}
                        secureTextEntry={this.state.showPass}
                        placeholderTextColor={'rgba(255,255,255,0.7)'}
                        underlineColorAndroid='transparent'
                   />
               </View>
               <TouchableOpacity style={styles.btnLogin}
               onPress={()=>this.props.navigation.navigate('Signin')}>
                    <Text style={styles.text}>Sign up</Text>
               </TouchableOpacity>
               <TouchableOpacity style={styles.btnRegister} 
                onPress={()=>this.props.navigation.navigate('Signin')}>
                    <Text style={styles.text}>Sign in</Text>
               </TouchableOpacity>
               {/* <TouchableOpacity style={styles.btnForgotPassword}>
                    <Text style={styles.textForgot}>Forgot Password?</Text>
               </TouchableOpacity> */}
           </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    backgroundContainer:{
        flex:1,
        height:null,
        width:null,
        justifyContent:'center',
        alignItems:'center'
    },
    logo:{
        width:120,
        height:120,
        opacity:0.1,
        backgroundColor: 'rgba(52, 52, 52, 0.3)'
    },
    logoContainer:{
        alignItems:'center',
        marginBottom: 50
    },
    inputContainer:{
        marginTop: 10
    },
    input:{
        width: Width-45,
        height:45,
        borderRadius:25,
        fontSize:16,
        paddingLeft:45,
        backgroundColor:'rgba(0,0,0,0.35)',
        color: 'rgba(255,255,255,0.7)',
        marginHorizontal:25
    },
    inputIcon:{
        position:'absolute',
        top: 8,
        left: 37
    },
    bttEye:{
        position:"absolute",
        top: 8,
        right: 37
    },
    btnLogin:{
        width: Width -55, 
        height: 45,
        borderRadius: 25,
        backgroundColor: '#432577',
        justifyContent:"center",
        alignItems:"center",
        marginTop: 20
    },
    text:{
        color: 'rgba(255,255,255,0.7)',
        fontSize: 16,
        textAlign: 'center',
        textTransform:'uppercase',
        fontWeight:'bold'
    },
    btnRegister:{
        width: Width -55, 
        height: 45,
        borderRadius: 25,
        backgroundColor: '#432577',
        justifyContent:"center",
        alignItems:"center",
        marginTop: 10
    },
    btnForgotPassword:{
        marginTop:10
    },
    textForgot:{
        textTransform: 'uppercase',
        fontSize:16,
        fontWeight:'bold',
        color: 'rgba(255,255,255,0.7)',
    }

});
