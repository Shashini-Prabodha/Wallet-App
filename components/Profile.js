import React, { Component } from 'react'
import { Text, View,StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default class Profile extends Component {
  componentDidMount() {
    this.animation.play();
    this.animation.play(0, 120);
       
  }
  getData = async () => {
    try {
        console.log("####")

        const email = await AsyncStorage.getItem('email');
        const name = await AsyncStorage.getItem('name');
        const password = await AsyncStorage.getItem('password');

        if (email !== null && password !== null) {
          
                this.props.navigation.replace('Navigation');

            } else {
              this.props.navigation.replace('Login');

            }
            // value previously stored
        
    } catch (e) {
        // error reading value
    }
}
  render() {
    return (
      <View>
        <LottieView style={styles.icon}
        ref={animation => {
          this.animation = animation;
        }}
        source={require('../assets/avator.json')}
      ></LottieView>
      <Text style={styles.userName}></Text>

      </View>
    )
  }
}

const styles=StyleSheet.create({
  icon:{
width:260,
alignSelf:'center'
  }
})