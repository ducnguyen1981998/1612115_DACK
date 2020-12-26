import React, { Component } from 'react';
import { Text, StyleSheet, View, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import PathItem from './pathItem';
import Icon from 'react-native-vector-icons/Ionicons';
import { mocks }  from '../../../../constants';
import { SkillContext } from '../../../../provider/SkillProvider'
import { ThemeContext } from '../../../../provider/ThemeProvider';
import { themes } from '../../../../constants/theme';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

export default function index(props){ 

    const renderListItem = (paths, id) => {
        return paths
        .filter(item => item.idskill == id )
        .map(item => <PathItem key={item.idpath} item={item} navigation={props.navigation}/>)
        // .filter(item => item.idpath == 2)
    };

    return <ThemeContext.Consumer>
        {
            ({theme, setTheme})=>{
                return <SkillContext.Consumer>
                    {
                        ({id, setId})=>{
                            return (
                                <View style={styles.container}>
                                    <View style={styles.container1}>
                                        <Text style={[styles.txt,{color: theme.fontcolor}]}>{props.title}</Text>
                                        <TouchableOpacity onPress={()=> props.navigation.navigate("Course")}>
                                        <Icon 
                                            name='ios-arrow-forward' 
                                            size={20} 
                                            textAlign="center" 
                                            color={theme.fontcolor1} 
                                            style={[styles.icon, {backgroundColor: theme.fontcolor}]}
                                        />
                                        </TouchableOpacity>           
                                    </View>
                                    <ScrollView 
                                        horizontal={true} 
                                        contentContainerStyle={styles.scroolView}
                                        showsHorizontalScrollIndicator={false}
                                    >
                                        {renderListItem(mocks.Path, id)}
                                    </ScrollView>
                                </View>  
                            )
                        }
                    }
                </SkillContext.Consumer> 
            }
        }
    </ThemeContext.Consumer>
    
    
}

const styles = StyleSheet.create({
    container:{
        marginTop: 10,
        flex:1
    },
    container1:{
        flexDirection:'row',
        justifyContent: 'space-between',
        marginLeft:10
    },
    txt:{
        fontSize: 18,
        fontWeight:'bold',
        opacity:0.7
        // flex:0.2
    },
    img:{
        marginRight: 5,
        height:20,
        width:20,
        opacity:0.5
    },
    scroolView:{
        marginLeft:10
    },
    icon:{
        textAlign:'center',
        marginRight: 10,
        height: 24,
        width:24,
        opacity:0.5,
        borderRadius:12
    },

});
