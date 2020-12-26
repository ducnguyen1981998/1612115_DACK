import React, { useContext } from 'react'
import { View, Text , StyleSheet, ScrollView } from 'react-native';
import PopurlarSkillItem from './PopularSkillsItem';
import { mocks } from '../../../../constants';
import { SkillContext } from '../../../../provider/SkillProvider';


const PopularSkills = (props) => {

    const skillContext = useContext(SkillContext);
    console.log("skillContext: ", skillContext);

    const renderListItem = (skills) => {
        return skills.map( skill => <PopurlarSkillItem key={skill.id} skill={skill} navigation={props.navigation}/>)
    };

    return (
        <View style={styles.container}>
            <View style={styles.container1}>
                <Text style={styles.txt}>{props.title}</Text>
            </View>
            <ScrollView 
                horizontal={true} 
                contentContainerStyle={styles.scroolView}
                showsHorizontalScrollIndicator={false}
            >
                {renderListItem(skillContext.state.category)}
            </ScrollView>
        </View>
    )
};

const styles= StyleSheet.create({
    container:{
        marginTop: 10,
        marginLeft:10,
        flex:1
    },
    txt:{
        fontSize: 18,
        marginBottom: 10,
        fontWeight:'bold'
        // flex:0.2
    },
    img:{
        marginRight: 5
    }
});

export default PopularSkills;
