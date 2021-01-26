import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import * as firebase from 'firebase'

export default class HomeScreen extends React.Component {
    state = {
        email: '',
        displayName: '',
    }

    componentDidMount() {
        const { email, displayName } = firebase.auth().currentUser
        this.setState({ email, displayName })
    }

    signOutUser = () => {
        firebase.auth().signOut()
    }

    

    render() {
        return (
            <View style={styles.container}>
                <Text>Hi {this.state.email} !</Text>
                <TouchableOpacity style={{marginTop: 32}} onPress={this.signOutUser}>
                    <Text>Log Out</Text>
                </TouchableOpacity>
                <Text>Choose a car model</Text>
                <TouchableOpacity style={{marginTop: 32, backgroundColor:'red'}} onPress={() => this.props.navigation.navigate('CarList',{name:'bmw'})}><Text>BMW</Text></TouchableOpacity>
                <TouchableOpacity style={{marginTop: 32, backgroundColor:'red'}} onPress={() => this.props.navigation.navigate('CarList',{name:'ferrari'})}><Text>Ferrari</Text></TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})