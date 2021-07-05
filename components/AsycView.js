import React, { Component } from 'react';
import { View, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button, Text } from 'native-base';


export default class AsycView extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  storeData = async (value) => {
    try {
      await AsyncStorage.setItem('name', 'SP');
      console.log("Saved");
      Alert.alert("Data Saved !")
    } catch (e) {
      // saving error
    }
  }

  getData = async () => {
    try {
      const value = await AsyncStorage.getItem('name')
      if (value !== null) {
        console.log(value)
        Alert.alert("Value is" + value)
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  }
  removeValue = async () => {
    try {
      await AsyncStorage.removeItem('name')
      console.log("Removed!")
      Alert.alert(value + " is removed !")

    } catch (e) {
      // remove error
    }
  }

  render() {
    return (
      <View>
        <Button rounded warning
          onPress={
            this.storeData.bind(this)}
        >
          <Text> Sign In </Text>
        </Button>

        <Button rounded info
          onPress={this.getData.bind(this)}
        >
          <Text> Login </Text>

        </Button>

        <Button rounded danger
          onPress={this.removeValue.bind(this)}
        >
          <Text> Logout </Text>

        </Button>

      </View>
    );
  }
}
