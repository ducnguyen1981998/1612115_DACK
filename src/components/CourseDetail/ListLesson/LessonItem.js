import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LessonItem = (props) => {

    const renderListItem = (item) => {
    return item.map(item => (
    <View style={styles.containerSmallItem}>
        <Text style={styles.txtItem}> ◊  {item.item}</Text>
        <Text style={styles.txtDur}>{item.duration}</Text>
    </View>
    ))};

    return (
        <View style={styles.container}>
            <View style={styles.containerMain}>
                <View style={styles.containerVideo}>
                    <Text style={styles.txtId}>{props.item.id}</Text>
                </View>
                <View style={styles.containerTxt}>
                    <Text style={styles.txtTitle}>{props.item.title}</Text>
                    <Text style={styles.txtDuration}>{props.item.duration}</Text>
                </View>
                <Icon name="ellipsis-v" size={24} style={styles.bttMore}/>
            </View>
            <View style={styles.containerMain2}>
                 {renderListItem(props.item.child)}
            </View>
        </View>
    )
}

export default LessonItem;

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: 10,
        marginLeft:10,
        marginRight: 10,
        paddingBottom:5,
        borderBottomWidth:1,
        borderBottomColor:"#000"
    },
    containerMain:{
        flex:1,
        flexDirection:'row'
    },
    containerVideo:{
        flex: 0.3,
        height: 50,
        backgroundColor:'lightgray',
        justifyContent:'center',
        alignItems:'center',
        borderBottomColor:"#000",
        borderBottomWidth: 2
    },
    txtId:{
        fontSize:20
    },
    containerTxt:{
        flex: 0.7,
        marginLeft:10
    },
    txtTitle:{
        fontWeight:'bold'
    },
    txtId:{
        fontWeight:"100"
    },
    bttMore:{
        alignSelf:'center'
    },
    containerMain2:{
        marginTop:20,
    },
    containerSmallItem:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    txtDur:{
        fontSize:12
    }
    
});
