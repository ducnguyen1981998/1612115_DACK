import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const PopularSkillsItem = (props) => {
    return (
        <TouchableOpacity onPress={()=>props.navigation.navigate('Course')}>
            <View style= {styles.container}>
                <Text style={styles.txt}>{props.skill.lang}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PopularSkillsItem

const styles = StyleSheet.create({
    container:{
        height: 30,
        backgroundColor: 'lightgray',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent:'center',
        marginRight:6
    },
    txt:{
        margin: 5,
        fontSize: 15
    }
});
