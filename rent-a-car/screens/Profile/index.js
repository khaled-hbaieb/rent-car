import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native'

export default function Profile(props) {
    console.log(props.state, 'proooooooooooooops')
    const email = props.navigation.state.params.email
    const displayName = props.navigation.state.params.displayName
    return (
        <View style={{alignSelf: 'center', marginTop: 35}}>
            <View style={styles.profileImage}>
                <Image resizeMode='center' source={require('../../assets/images/profile.jpg')} style={styles.image}></Image>
            </View>
            <View style={styles.infoContainer} >
                <Text style={[styles.text, {fontWeight: "200"}]}>Email: {email}</Text>
                <Text style={styles.text}>Name: {displayName}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        width: undefined,
        height: undefined
    },
    profileImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        overflow: 'hidden'
    },
    infoContainer: {
        alignSelf: 'center',
        alignItems: 'center',
    },
    text: {
        
        color: '#52575D'

    }
})