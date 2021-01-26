import React, {useEffect} from 'react';
import {View, Text, ImageBackground, Button} from 'react-native'
import styles from './styles'
import ButtonComponent from '../ButtonComponent'




const CarItem = (props) => {
  const name = props.car.name
  const price = props.car.price
  const image = props.car.image
const overView = props.car.overView



    

    return (
        <View style={styles.carContainer}>
          
      <ImageBackground source={image} style={styles.image}/>
      <View style={styles.titles}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.price}>{price}</Text>
      </View>
      {/* <View style={styles.buttonsContainer}>
      <ButtonComponent type='primary' content='CUSTOM ORDER' carModel={name} image={image} price={price}/>
      <ButtonComponent type='secondary' content='Car Details' carModel={name} image={image} overView={overView}/>
      </View> */}
    </View>
    )
}

export default CarItem