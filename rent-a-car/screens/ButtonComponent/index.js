import React, {useState} from 'react';
import {View, Text, Pressable, Button} from 'react-native'
import styles from './styles'
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// // import CarDetails from '../CarDetails'
// import { useNavigation } from '@react-navigation/native';




const  ViewComponent = (props) => {
    // const navigation = useNavigation();
    // console.log(props)
    const type = props.type
    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6'
    const textColor = type === 'primary' ? '#FFFFFF' : '#171A20'
    const content = props.content
    const onPress = props.onPress
    const carName = props.carModel
    const image = props.image
    const overView = props.overView
    const price = props.price
    // const onPurchase = () => navigation.navigate('Purchase', {carName: carName, image, price})
    // const onDetails = () => navigation.navigate('CarDetails', {carName: carName, image, overView})
    return (
        <View style={styles.container}>
            {/* <Pressable style={[styles.button, {backgroundColor}]}
            onPress={type ==='primary' ? onPurchase : onDetails}
            >
                <Text style={[styles.text, { color: textColor }]}>{content}</Text>
            </Pressable> */}
   </View>
    )
}







export default ViewComponent