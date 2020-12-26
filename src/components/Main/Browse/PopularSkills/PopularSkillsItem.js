import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SkillContext, SkillProvider } from '../../../../provider/SkillProvider';


const PopularSkillsItem = (props) => {
    return <SkillContext.Consumer>
        {
            ({id ,setId}) =>{
                return (
                    <TouchableOpacity onPress={()=> { 
                        props.navigation.navigate('Course',{
                            idSkill: props.skill.id
                        })
                        // console.log("skill:", props.skill.IDSkill)
                    }}>
                        <View style= {styles.container}>
                            <Text style={styles.txt}>{props.skill.name}</Text>
                        </View>
                    </TouchableOpacity>
                )
            }
        }
    </SkillContext.Consumer>

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
