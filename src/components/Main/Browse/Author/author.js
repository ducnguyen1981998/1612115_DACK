import React from 'react'
import { View, Text, StyleSheet,ScrollView } from 'react-native';
import AuthorItem from './authorItem'

const Author = (props) => {
    const authors=[
        {
            id: 1,
            name: "Huy Nguyen",
        },
        {
            id: 2,
            name: "Hai Pham"
        },
        {
            id: 3,
            name: "Duc Nguyen"
        },
        {
            id: 4,
            name: "Dat Nguyen",
        },
        {
            id: 5,
            name: "Khoa Pham"
        },
        {
            id: 6,
            name: "Kien Bui"
        }
    ];

    const renderListItem = (authors) =>{
        return authors.map( author=> <AuthorItem key={author.id} author={author} navigation={props.navigation}/>)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.txt}>{props.title}</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {renderListItem(authors)}
            </ScrollView>
        </View>
        
    )
};

const styles= StyleSheet.create({
    container:{
        marginTop: 10,
        marginLeft: 10,
        flex:1
    },
    txt:{
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10
    },
    
});

export default Author;
