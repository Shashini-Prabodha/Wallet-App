import React, { Component } from 'react';
import Home from './components/Home';
import Login from './components/Login';
// import Loader from './components/Loader';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';

const Stack = createStackNavigator();


export default class App extends Component {
    render() {
        return (
            <NavigationContainer>{
                
                
                <Stack.Navigator>
                    <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />                  

                    {/* <Stack.Screen name="Loader" component={Loader} />                   */}
                
                    <Stack.Screen name="Home" component={Home} />

                </Stack.Navigator>
            }</NavigationContainer>
          

        )
        
    }
    // render(){

    // }
}