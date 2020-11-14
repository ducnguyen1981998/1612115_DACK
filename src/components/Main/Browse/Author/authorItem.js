import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'

const AuthorItem = (props) => {
    return (
        <TouchableOpacity onPress={()=> {props.navigation.navigate("Course")}}>
            <View style={styles. container}>
                <Image style={styles.img} source={require('../../../../../assets/img/person.jpg') }/>
                <Text style= {styles.txt}>{props.author.name}</Text>
            </View>
        </TouchableOpacity>
    )
};

const styles= StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 5,
        marginBottom: 20
    },
    img:{
        borderRadius: Dimensions.get("window").width/8,
        width: Dimensions.get("window").width/4,
        height: Dimensions.get("window").width/4,
        borderColor: '#fff',
    },
    txt:{
        fontSize: 14,
        color: 'rgba(255,255,255,0.3)',
    }
});

export default AuthorItem;
