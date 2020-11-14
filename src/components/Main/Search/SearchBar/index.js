import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SearchBar } from 'react-native-elements';

const index = (props) => {
    return (
        <SearchBar
          round
          searchIcon={{ size: 24 }}
          onChangeText={text => props.SearchFilterFunction(text)}
          onClear={text => props.SearchFilterFunction('')}
          placeholder="Search..."
          value={props.search}
        />
    )
}

export default index

const styles = StyleSheet.create({

});
