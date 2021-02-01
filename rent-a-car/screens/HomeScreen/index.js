import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, ScrollView, FlatList, Image } from 'react-native'
import * as firebase from 'firebase'
import gallery from './gallery'
import { FontAwesome } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons';

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
  

    static navigationOptions = ({ navigation })=>{
        const { navigate } = navigation
        const { email, displayName } = firebase.auth().currentUser
        return{
        headerRight: (
                    <View style={{flexDirection:"row", textAlign:"center", alignItems: "center"}}>
                        <View  style={{marginRight: 10,textAlign:"center", alignItems: "center"}}><FontAwesome name="user-circle" size={24} color="black" onPress={() => navigate('Profile',{email: email, displayName: displayName})} /><Text style={{ fontWeight:'bold'}} onPress={() => navigate('Profile',{email: email, displayName: displayName})}>Profile</Text></View>
                        <View  style={{marginRight: 10,textAlign:"center", alignItems: "center"}}><MaterialIcons name="logout" size={24} color="black" onPress={() => firebase.auth().signOut()} /><Text onPress={() => firebase.auth().signOut()} style={{fontWeight:'bold'}} >Log out</Text></View>
                    </View>
                  ),
        } 
    }
    

    render() {
        
        const image = { uri: "https://static.apidae-tourisme.com/filestore/objets-touristiques/images/43/231/5957419.jpg" };
        return (
            // <View style={styles.container}>
            <ScrollView>
                <ImageBackground 
                source ={image} 
                style={{width: '100%', height: 270, flex: 1}}
                imageStyle={{borderBottomRightRadius: 60}}
                >

                </ImageBackground>
                <ScrollView >
                    <View style={{padding: 16}}>
                        <Text style={{fontSize:22, fontWeight: 'bold', flex:1}}>Top Cars</Text>
                    </View>
                    <View>
                        <FlatList
                        horizontal={true}
                        data={gallery}
                        renderItem={({item}) => {
                            return(
                                <View>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('CarList',{name:item.image.title})}>
                                        <Image resizeMode='contain' source={item.image} style={{borderRadius:10,width: 150, marginRight: 14, height: 250}}/>
                                    </TouchableOpacity>
                                </View>
                            )
                        }}
                        />
                    </View>
                </ScrollView>
                <ScrollView >
                    <View style={{padding: 16}}>
                        <Text style={{fontSize:22, fontWeight: 'bold', flex:1, marginTop: 30}}>Available Cars</Text>
                    </View>
                    <View>
                        <FlatList
                        horizontal={true}
                        data={gallery}
                        renderItem={({item}) => {
                            return(
                                <View>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('CarList',{name:item.image.title})}>
                                        <Image 
                                        resizeMode='contain'
                                        source={item.image} 
                                        style={{borderRadius:10,width: 150, marginRight: 14, height: 250}
                                        
                                    
                                        }/>
                                    </TouchableOpacity>
                                </View>
                            )
                        }}
                        />
                    </View>
                </ScrollView>
                {/* <Text>Hi {this.state.email} !</Text>
                <TouchableOpacity style={{marginTop: 32}} onPress={this.signOutUser}>
                    <Text>Log Out</Text>
                </TouchableOpacity>
                <Text>Choose a car model</Text>
                <TouchableOpacity style={{marginTop: 32, backgroundColor:'red'}} onPress={() => this.props.navigation.navigate('CarList',{name:'bmw'})}><Text>BMW</Text></TouchableOpacity>
                <TouchableOpacity style={{marginTop: 32, backgroundColor:'red'}} onPress={() => this.props.navigation.navigate('CarList',{name:'ferrari'})}><Text>Ferrari</Text></TouchableOpacity> */}
            </ScrollView>
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