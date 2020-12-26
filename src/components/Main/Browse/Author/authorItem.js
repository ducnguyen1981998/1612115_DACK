import React from 'react'
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native'
import { AuthorProvider, AuthorContext} from '../../../../provider/AuthorProvider';

const AuthorItem = (props) => {
    
    return <AuthorContext.Consumer>
        {
            ({setIdSelected}) => {
                return (
                    <TouchableOpacity onPress={()=> {
                        props.navigation.navigate("Course", { IDAuthor: props.author.id}),
                        setIdSelected(props.author.id)
                    }}>
                        <View style={styles.container}>
                            <Image style={styles.img} source={{ uri: props.author["user.avatar"] }}/>
                            <Text style= {styles.txt}>{props.author["user.name"]}</Text>
                        </View>
                    </TouchableOpacity>
                )            
            }
        }
    </AuthorContext.Consumer>
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
