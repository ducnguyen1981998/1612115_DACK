import React, { Component, useState } from 'react';
import { Text, StyleSheet, View, Image, Dimensions, Switch, TouchableOpacity } from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function SectionCoursesItem(props) {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <View style={styles.containerTxt}>
                    <Text style={ styles.txtTitle}>{props.item.title}</Text>
                    {   props.item.sub &&
                        <Text style={ styles.txtSub}>{props.item.sub}</Text>
                    }
                </View>
                { props.item.radioButton &&
                <Switch
                    trackColor={{ false: "#767577", true: "#0097fc" }}
                    thumbColor={isEnabled ? "#0097fc" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    style={styles.switch}
                    
                /> 
                }
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        borderBottomColor:'rgba(0,0,0,0.3)',
        borderBottomWidth:1,
        flexDirection:'row'
    },
    containerTxt:{
        flex: 0.9,
        marginBottom:8,
        marginTop:8,
    },
    txtTitle:{
        fontWeight:'bold',
        fontSize: 16
    },
    switch:{
        flex:0.1,
    }

});
