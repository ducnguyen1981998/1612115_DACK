import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native'
import Login from './Login';

export default class index extends Component {
    render() {
        return (
            <View>
                <Login/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
        
    }
});
