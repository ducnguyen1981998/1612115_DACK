import React from 'react'
import { View, Text , StyleSheet, ScrollView } from 'react-native';
import PopurlarSkillItem from './PopularSkillsItem'

const PopularSkills = (props) => {
    const skills=[
        {
            id: 1,
            lang: 'Angular'
        },
        {
            id: 2,
            lang: 'JavaScript'
        },
        {
            id: 3,
            lang: 'C#'
        },
        {
            id: 4,
            lang: 'Java'
        },
        {
            id: 5,
            lang: 'Data Analysis'
        },
        {
            id: 6,
            lang: 'ASP.NET'
        },
        {
            id: 7,
            lang: 'Node'
        },
        {
            id: 8,
            lang: 'Design Patterns'
        },
        {
            id: 9,
            lang: 'Python'
        },
        {
            id: 10,
            lang: 'Next'
        },
        {
            id: 11,
            lang: 'SQL Server'
        },
        {
            id: 12,
            lang: 'Database Administraion'
        },
        {
            id: 13,
            lang: 'Part Modeling'
        },
    ];

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
                {renderListItem(skills)}
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
