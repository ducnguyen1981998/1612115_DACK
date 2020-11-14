import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground } from 'react-native';
import {ButtonGroup} from 'react-native-elements';
import Background from '../../../../../assets/img/bg.jpg'
import Course from './Course';
import Author from './Author';
import All from './All';
import Path from './Path';

export default class index extends Component {
    constructor (props) {
        super(props)
        this.state = {
          selectedIndex: 0
        }
        this.updateIndex = this.updateIndex.bind(this);
      }
      
      updateIndex (selectedIndex) {
        this.setState({selectedIndex})
      }
      
      render () {
        const buttons = ['All', 'Courses', 'Path','Author'];
        const { selectedIndex } = this.state;
      
        return (
        <ImageBackground source={Background} style={styles.backgroundContainer}>    
            <View style={styles.containerView}>
                    <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    containerStyle={styles.container}
                    textStyle={styles.txt}
                    selectedButtonStyle={styles.btt}
                    selectedTextStyle={styles.txtSelected}
                    />
                    {
                        selectedIndex==0 && <All navigation={this.props.navigation}/>
                    }
                    {
                        selectedIndex==1 && <Course navigation={this.props.navigation}/>
                    }
                    {
                        selectedIndex==2 && <Path navigation={this.props.navigation}/>
                    }
                    {
                        selectedIndex==3 && <Author navigation={this.props.navigation}/>
                    }
            </View>
        </ImageBackground>  
        )
      }
}

const styles = StyleSheet.create({
    backgroundContainer:{
        flex:1,
        height:null,
        width:null,
    },
    containerView:{
        flex:1,
    },
    container:{
        flex:0.06,
        // marginLeft: 5,
        // marginRight:5,
        // marginTop:10,
        backgroundColor:'#fff',
        borderWidth:0
    },
    txt:{
        fontWeight:'bold',
        fontSize: 15,
    },
    txtSelected:{
        color: '#527F96'
    },
    btt:{
        borderBottomWidth:3,
        borderBottomColor: '#527F96',
        backgroundColor: '#fff'

    }
});
