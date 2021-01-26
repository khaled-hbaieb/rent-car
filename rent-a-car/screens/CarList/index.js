import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native'
import styles from './styles'
import cars from './cars'
import CarItem from '../CarItem'


const CarList = (props) => {
    const model = props.navigation.state.params.name
    console.log(model,'props')
    // let name = JSON.stringify(props.navigation.getParam('name'))
    let newData = cars.filter(obj => obj.model === model)
    console.log(newData,'3asbaaaaaaaaaaaa');
    
    return (
        <View style={styles.container}>
           <FlatList 
           data={newData}
           renderItem={({item}) => 
            <CarItem car={item} model={model}/> }
            snapToAlignment={'start'}
            decelerationRate={'fast'}
            snapToInterval={Dimensions.get('window').height}
            showsVerticalScrollIndicator={false}
           />
           
        </View>
    )
}

export default CarList