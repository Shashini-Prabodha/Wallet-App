import React, { Component } from 'react';
import Home from './components/Home';
import Income from './components/Income';
import Expense from './components/Expense';
import Profile from './components/Profile';
import Login from './components/Login';
import Loader from './components/Loader';
import LoaderHome from './components/LoaderHome';
import Card from './components/CardItem';
import SignUp from './components/SignUp';
import AsycView from './components/AsycView';

import Navigation from './components/Navigation';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { View } from 'react-native';

const Stack = createStackNavigator();


export default class App extends Component {
    render() {
        return (
            <NavigationContainer>{


                <Stack.Navigator>
                    {/* <Stack.Screen name="AsycView" component={AsycView} /> */}


                    <Stack.Screen options={{ headerShown: false }} name="Loader" component={Loader} />
                    <Stack.Screen options={{ headerShown: false }} name="LoaderHome" component={LoaderHome} />

                    <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
                    <Stack.Screen options={{ headerShown: false }} name="SignUp" component={SignUp} />

                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Income" component={Income} />
                    <Stack.Screen name="Expense" component={Expense} />
                    <Stack.Screen name="Profile" component={Profile} />
                    <Stack.Screen name="Card" component={Card} />

                    <Stack.Screen options={{ headerShown: false }} name="Navigation" component={Navigation} />


                </Stack.Navigator>
            }</NavigationContainer>


        )

    }
    // render(){

    // }
}