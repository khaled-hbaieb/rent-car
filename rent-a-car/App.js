import { createAppContainer, createSwitcherContainer, createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import LoadingScreen from './screens/LoadingScreen'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import * as firebase from 'firebase'



var firebaseConfig = {
  apiKey: "AIzaSyD68gqVcMIfi9g616Pk44ACUTzcRzZUrqs",
  authDomain: "rent-a-car-fd37d.firebaseapp.com",
  projectId: "rent-a-car-fd37d",
  storageBucket: "rent-a-car-fd37d.appspot.com",
  messagingSenderId: "878169893969",
  appId: "1:878169893969:web:b80e178cea9c716bc7dc70"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const AppStack = createStackNavigator({
  Home: HomeScreen
})

const AuthStack = createStackNavigator({
  Login: LoginScreen,
  Register: RegisterScreen
})




export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
)