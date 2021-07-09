import React from 'react';
import {  StyleSheet,Image,Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';

import LottieView from 'lottie-react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './Home';
import IncomeScreen from './Income';
import ExpenseScreen from './Expense';
import ProfileScreen from './Profile';


const HomeStack = createStackNavigator();
const IncomeStack = createStackNavigator();
const ExpenseStack = createStackNavigator();
const ProfileStack = createStackNavigator();


const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
  
  <Tab.Navigator
    initialRouteName="Home"
    activeColor="#fff"
  >
    <Tab.Screen
      name="Home"
      component={HomeStackScreen}
      options={{
        tabBarLabel: 'Home',
        tabBarColor: '#AA2EE6',
        tabBarIcon: ({ color }) => (
          <Image
          source={require("../assets/icon/home.png")}
          resizeMode="contain"
          style={styles.icon}></Image>
          
        ),
      }}
    />
    <Tab.Screen
      name="Income"
      component={IncomeStackScreen}
      options={{
        tabBarLabel: 'Income',
        tabBarColor: '#d02860',
        tabBarIcon: ({ color }) => (
          <Image
          source={require("../assets/icon/income.png")}
          resizeMode="contain"
          style={styles.icon}></Image>
        ),
      }}
    />
    <Tab.Screen
      name="Expense"
      component={ExpenseStackScreen}
      options={{
        tabBarLabel: 'Expense',
        tabBarColor: '#1f65ff',
        tabBarIcon: ({ color }) => (
          <Image
          source={require("../assets/icon/expense.png")}
          resizeMode="contain"
          style={styles.icon}></Image>
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={ProfileStackScreen}
      options={{
        tabBarLabel: 'Profile',
        tabBarColor: '#0fb9b1',
        tabBarIcon: ({ color }) => (
          <Image
          source={require("../assets/icon/profile.png")}
          resizeMode="contain"
          style={styles.icon}></Image>
        ),
      }}
    />

  </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({ navigation }) => (
  <HomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#a55eea',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <HomeStack.Screen name="My Wallet" component={HomeScreen} options={{
      title: 'Home',
      headerLeft: () => (
        <LottieView style={styles.icon1}
            source={require('../assets/newwallet.json')}
            colorFilters={[{
              keypath: "button",
              color: "#F00000"
            }, {
              keypath: "Sending Loader",
              color: "#F00000"
            }]}
            autoPlay
            loop
          />
      
      )
    }} />
  </HomeStack.Navigator>
);

const IncomeStackScreen = ({ navigation }) => (
  <IncomeStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#d02860',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <IncomeStack.Screen name="Income" component={IncomeScreen} options={{
      headerLeft: () => (
        //<Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
        <Icon></Icon>
      )
    }} />
  </IncomeStack.Navigator>
);

const ExpenseStackScreen = ({ navigation }) => (
  <ExpenseStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#1f65ff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <ExpenseStack.Screen name="Expense" component={ExpenseScreen} options={{
      headerLeft: () => (
        //<Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
        <Icon></Icon>
      )
    }} />
  </ExpenseStack.Navigator>
);

const ProfileStackScreen = ({ navigation }) => (
  <ProfileStack.Navigator screenOptions={{
    headerStyle: {
      backgroundColor: '#0fb9b1',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }}>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} options={{
      
      headerLeft: () => (
        //<Icon.Button name="ios-menu" size={25} backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}></Icon.Button>
        <Icon></Icon>
        
        
      )
    }} />
  </ProfileStack.Navigator>
);

const styles = StyleSheet.create({
  icon: {
  width:26,
  height:30

  },
  icon1: {
    width:50,
    height:35,
left:8
    }

});