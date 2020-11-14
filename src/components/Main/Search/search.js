/*This is an Example of SearchBar in React Native*/
import * as React from 'react';
import { Text, View, StyleSheet, FlatList, ActivityIndicator, Platform } from 'react-native';
import SearchEmpty from './SearchEmpty';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SearchBar from './SearchBar';
import Data from '../../../../constraint/data';
 
export default class App extends React.Component {
  constructor(props) {
    super(props);
    //setting default state
    this.state = 
    { 
        isLoading: true,
        isStart: true,

        search: '',
        dataSource:'',
        historySource:[
            {
                "id": 1,
                "title": "nodejs"
            },
            {
                "id": 2,
                "title": "angular"
            },
            {
                "id": 3,
                "title": "php"
            },
            {
                "id": 4,
                "title": "react"
            },
        ]
         
    };
    this.arrayholder = [];
  }
  componentDidMount() {
    return fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            // dataSource: responseJson,
          },
          function() {
            this.arrayholder = responseJson;
          }
        );
      })
      .catch(error => {
        console.error(error);
      });
      // this.setState(
      //   {
      //     isLoading: false
      //   },
      //   {
      //     function(){
      //       this.arrayholder = Data;
      //     }
      //   }
      // );
  }
  search = text => {
    console.log(text);
  };
  clear = () => { 
    this.search.clear();
  };

  SearchFilterFunction(text) {

    //passing the inserted text in textinput
        const newData = this.arrayholder.filter((item)=> {
        //applying filter for the inserted text in search bar
        const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
        });
    this.setState({
      //setting the filtered newData on datasource
      //After setting the data it will automatically re-render the view
      dataSource: newData,
      search:text,
      isStart:false
    });
  }
  ListViewItemSeparator = () => {
    //Item sparator view
    return (
      <View
        style={{
          height: 0.3,
          width: '95%',
          backgroundColor: '#080808',
          marginLeft:10
        }}
      />
    );
  };
  render() {
    const { navigation } = this.props;
    const { search, isStart, historySource, dataSource, isLoading } =this.state;  
    if (isLoading) {
      //Loading View while data is loading
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      //ListView to show with textinput used as search bar
      <View style={styles.viewStyle}>
        {/* Thanh tim kiem */}
        <SearchBar 
            search = {search} 
            SearchFilterFunction={this.SearchFilterFunction.bind(this)}
        />
        {/* Lich su Tiem kiem */}
        { historySource.length !=0 && dataSource.length==0 &&
        <View style={styles.recentTextContainer}>
            <Text style={styles.recentText}>Recent searches</Text>
            <TouchableOpacity onPress={()=> this.setState({historySource:[]})}>
                <Text style={styles.clearText}>clear all</Text>
            </TouchableOpacity>
        </View>
        }
        {/* Hien thi lich su tim kiem && huong dan tim kiem */}
        <FlatList
          data={this.state.dataSource.length && !isStart ? this.state.dataSource :this.state.historySource}
          ItemSeparatorComponent={this.ListViewItemSeparator}
          //Item Separator View
          renderItem={({ item }) => (
            <TouchableOpacity onPress={ item => navigation.navigate('ResultSearch')}>
                <Text style={styles.textStyle}>{item.title}</Text>
            </TouchableOpacity>
          )}
          enableEmptySections={true}
          style={{ marginTop: 10 }}
          keyExtractor={(item, index) => index.toString()}
        />
        {/* {
            dataSource.length==0 && !isStart &&
            <SearchEmpty/>
        } */}
      </View>
    );
  }
};

const styles = StyleSheet.create({
    viewStyle: {
      justifyContent: 'center',
      flex: 1,
      backgroundColor:'white',
      marginTop: Platform.OS == 'ios'? 30 : 0
    },
    textStyle: {
      padding: 10,
    },
    recentTextContainer:{
        marginLeft:10,
        marginTop:5,
        marginRight:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    recentText:{
        fontSize: 16
    },
    clearText:{
        fontSize: 16,
        textTransform:'uppercase',
        color:'blue'
    }

  });