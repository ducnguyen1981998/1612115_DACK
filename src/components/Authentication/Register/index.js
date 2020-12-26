import React, { Component } from 'react';
import { Text, StyleSheet, View, ImageBackground, Image, Dimensions, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'

import Background from "../../../../assets/img/bg.jpg";
import Logo from '../../../../assets/img/logo.png';
import { TextInput} from 'react-native-gesture-handler';
import { ThemeContext } from '../../../provider/ThemeProvider';
import { themes } from '../../../constants/theme';

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
        return <ThemeContext.Consumer>
            {
                ({theme,setTheme})=>{
                    //setTheme(themes.dark)
                    return (
                        <ImageBackground source={Background} style={styles.backgroundContainer}>
                            <View style={styles.logoContainer}>
                                 <Image source={Logo} style={styles.logo}/>
                            </View>
                            <View style={styles.inputContainer}>
                                <Icon 
                                     name={'ios-person'} 
                                     size={28} 
                                     color={theme.fontcolor}
                                     style={styles.inputIcon}
                                />
                                <TextInput
                                     style={[styles.input, theme === themes.light ? styles.light:styles.dark]}
                                     placeholder={"Username"}
                                     placeholderTextColor={theme.fontcolor}
                                     underlineColorAndroid='transparent'
                                />
                            </View>
                            <View style={styles.inputContainer}>
                                <Icon 
                                     name={'ios-lock'} 
                                     size={26} 
                                     color={theme.fontcolor}
                                     style={styles.inputIcon}
                                />
                                <TextInput
                                     style={[styles.input, theme === themes.light ? styles.light:styles.dark]}
                                     placeholder={"Password"}
                                     secureTextEntry={this.state.showPass}
                                     placeholderTextColor={theme.fontcolor}
                                     underlineColorAndroid='transparent'
                                />
                            </View>
                            <View style={styles.inputContainer}>
                                <Icon 
                                     name={'ios-lock'} 
                                     size={26} 
                                     color={theme.fontcolor}
                                     style={styles.inputIcon}
                                />
                                <TextInput
                                     style={[styles.input, theme === themes.light ? styles.light:styles.dark]}
                                     placeholder={"Verify Password"}
                                     secureTextEntry={this.state.showPass}
                                     placeholderTextColor={theme.fontcolor}
                                     underlineColorAndroid='transparent'
                                />
                            </View>
                            <TouchableOpacity style={[styles.btnLogin, {backgroundColor: theme.colorprimary}]}
                            onPress={()=>this.props.navigation.navigate('Signin')}>
                                 <Text style={styles.text}>Sign up</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.btnRegister, {backgroundColor: theme.colorprimary}]} 
                             onPress={()=>this.props.navigation.navigate('Signin')}>
                                 <Text style={styles.text}>Sign in</Text>
                            </TouchableOpacity>
                        </ImageBackground>
                    )
                }
            }
        </ThemeContext.Consumer>
        
    }
}

const styles = StyleSheet.create({
    light:{
        backgroundColor: themes.light.colorsecondary,
        opacity: 0.7,
        color: themes.light.fontcolor
    },
    dark:{
        backgroundColor: themes.dark.colorsecondary,
        opacity: 0.7,
        color: themes.dark.fontcolor
    },
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
