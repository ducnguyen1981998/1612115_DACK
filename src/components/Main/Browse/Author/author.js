import React from 'react'
import { View, Text, StyleSheet,ScrollView, ActivityIndicator } from 'react-native';
import AuthorItem from './authorItem';
//import {mocks} from '../../../../constants';
import { AuthorProvider, AuthorContext} from '../../../../provider/AuthorProvider'

const Author = (props) => {

    const renderListItem = (authors) =>{
        return authors.map( author=> <AuthorItem key={author.id} author={author} navigation={props.navigation}/>)
    }

    return <AuthorContext.Consumer>
        {
            ({author, isLoading}) => {
                return (
                    <View style={styles.container}>
                        { isLoading && <ActivityIndicator size="large" color="red"/>}
                        <Text style={styles.txt}>{props.title}</Text>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {renderListItem(author)}
                        </ScrollView>
                    </View>
                    
                )
            }
        }
    </AuthorContext.Consumer>

   
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
        marginBottom: 10,
        opacity: 0.7
    },
    
});

export default Author;
