import React, { useState, useEffect, useContext } from 'react';
import { Text, StyleSheet, View, ImageBackground, Image, Dimensions, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Background from "../../../../assets/img/bg.jpg";
import Logo from '../../../../assets/img/logo.png';
import { TextInput} from 'react-native-gesture-handler';
import { login } from '../../../services/authenticationService';
import { ThemeContext } from '../../../provider/ThemeProvider';
import { themes } from '../../../constants/theme';
import { AuthenticationContext } from '../../../provider/AuthenticationProvider';

const {width: Width}= Dimensions.get("window");

const index = (props) => {
    //Dữ liệu
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    //Cập nhật ẩn hiện mật khẩu
    const [showPass, setShowPass] = useState(true);

    //Kiểm tra data
    //const [status, setStatus] = useState(null);
    const authContext = useContext(AuthenticationContext);

    useEffect( () =>{
        console.log("authContext: ",authContext)
        if(authContext.state.isAuthenticated){
            props.navigation.navigate('Home'); 
        }
    }, [authContext.state]);

    const updateEye = () => {
        setShowPass(!showPass);
    }

    const renderLoginStatus = (state) =>{
        if(state.isAuthenticated){
            return <View/>
        }else{
            return (<Text style={styles.detailError}>{state.message}</Text>)
        }
    }

    return <ThemeContext.Consumer>
        {
            ({theme,setTheme})=>{

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
                                onChangeText= {text => setUsername(text)}
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
                                secureTextEntry={showPass}
                                placeholderTextColor={theme.fontcolor}
                                underlineColorAndroid='transparent'
                                onChangeText= {text => setPassword(text)}
                            />
                            <TouchableOpacity style={styles.bttEye}>
                                <Icon 
                                    name={showPass ? 'ios-eye': 'ios-eye-off'} 
                                    size={28} 
                                    onPress={()=> updateEye()}
                                    color={theme.fontcolor}
                            />
                            </TouchableOpacity>
                        </View>
                        {renderLoginStatus(authContext.state)}
                        <TouchableOpacity style={[styles.btnRegister, {backgroundColor: theme.colorprimary}]}
                        onPress={()=> {
                            authContext.login(username, password)  
                        }}
                        >
                            <Text style={[styles.text, {color: theme.fontcolor}]}>Sign in</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.btnRegister, {backgroundColor: theme.colorprimary}]} 
                        onPress={()=>props.navigation.navigate('Signup')}>
                            <Text style={[styles.text, {color: theme.fontcolor}]}>Sign up</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnForgotPassword}
                        onPress={()=>props.navigation.navigate('ForgotPassword')}>
                            <Text style={[styles.textForgot, {color: theme.fontcolor}]}>Forgot Password?</Text>
                        </TouchableOpacity>    
                    </ImageBackground>
                    )
            }
        }
    </ThemeContext.Consumer>      
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
        justifyContent:"center",
        alignItems:"center",
        marginTop: 20
    },
    text:{
        fontSize: 16,
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight:'bold',
        opacity: 0.7
    },
    textForgot:{
        fontSize: 16,
        textAlign: 'center',
        opacity: 0.7,
        textDecorationLine: 'underline'
    },
    btnRegister:{
        width: Width -55, 
        height: 45,
        borderRadius: 25,
        justifyContent:"center",
        alignItems:"center",
        marginTop: 10
    },
    btnForgotPassword:{
        marginTop:10
    },

    detailError:{
        color: "red",
        marginTop: 4,
        padding: 8,
        fontSize: 14,
        width: Width-55,
        borderRadius: 10,
        textAlign:'center'
    }
});

export default index;
