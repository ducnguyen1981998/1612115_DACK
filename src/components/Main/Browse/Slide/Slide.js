import React from 'react'
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native'
import SlideItem from './SlideItem';

const Slide = () => {

    const slides =[
        {
            id: 1,
            titleSlide: 'CONFERENCES',
            img: '../../../../../assets/img/newrelease1.jpg'
        },
        {
            id: 2,
            titleSlide: 'IT OPS',
            img: '../../../../../assets/img/newrelease1.jpg'
        },
        {
            id: 3,
            titleSlide: 'DATA PROFESSIONAL',
            img: '../../../../../assets/img/newrelease1.jpg'
        },
        {
            id: 4,
            titleSlide: 'Creative PROFESSIONAL',
            img: '../../../../../assets/img/newrelease1.jpg'
        },
        {
            id: 5,
            titleSlide: 'ARCHITECTURE AND CONSTRUCTION',
            img: '../../../../../assets/img/newrelease1.jpg'
        },
        {
            id: 6,
            titleSlide: '<Software> DEVELOPEMENT',
            img: '../../../../../assets/img/newrelease1.jpg'
        },
        {
            id: 7,
            titleSlide: 'Information AND CYBER SECURITY',
            img: '../../../../../assets/img/newrelease1.jpg'
        },
        {
            id: 8,
            titleSlide: 'BUSSINESS PROFESSIONAL',
            img: '../../../../../assets/img/newrelease1.jpg'
        },
        {
            id: 9,
            titleSlide: 'Creative PROFESSIONAL',
            img: '../../../../../assets/img/newrelease1.jpg'
        },
        {
            id: 10,
            titleSlide: 'ARCHITECTURE AND CONSTRUCTION',
            img: '../../../../../assets/img/newrelease1.jpg'
        },
        {
            id: 11,
            titleSlide: '<Software> DEVELOPEMENT',
            img: '../../../../../assets/img/newrelease1.jpg'
        },
        {
            id: 12,
            titleSlide: 'Information AND CYBER SECURITY',
            img: '../../../../../assets/img/newrelease1.jpg'
        },
        {
            id: 13,
            titleSlide: 'BUSSINESS PROFESSIONAL',
            img: '../../../../../assets/img/newrelease1.jpg'
        },
    ];

    const renderListItem = (slides) => {
        return slides.map( slide => <SlideItem  key={slide.id} slide={slide}/>)
    };

    return (
        <View style={styles.container}>
            <FlatList 
                style= {{margin: 5}}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                // numColumns={3} 
                // columnWrapperStyle={styles.row}
                data={slides}
                keyExtractor ={(item,index)=> item.id}
                renderItem={ (item) => 
                    <SlideItem  key={item.id} slide={item}/>
                }
            >
            </FlatList>
        </View>
    )
}

export default Slide;

const styles = StyleSheet.create({
    container:{
    },
    scrollView:{

    },
    row:{
        flex: 1,
    }
});
