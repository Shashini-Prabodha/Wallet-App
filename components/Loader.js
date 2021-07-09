import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from 'react-native-animatable';

import LottieView from 'lottie-react-native';
import { Button } from 'react-native-paper';

export default class Loader extends Component {
  constructor(props) {
    super(props);
    this.state = {

      respArr: [],

    };

  }


  componentDidMount() {

    // this.animation.play();
    // Or set a specific startFrame and endFrame with:
    // this.animation.play(0, 120);
    setTimeout(() => {
      console.log("log");

      //  this.props.navigation.replace('Login');

    }, 2000);
  }

  getData = async () => {
    try {


      const id = await AsyncStorage.getItem('id');

      const email = await AsyncStorage.getItem('email');
      const password = await AsyncStorage.getItem('password');
      console.log("####" + id + " -id " + email + " " + password)

      if (email !== null && password !== null) {

        this.props.navigation.replace('Navigation');
        this.getDataAPI();
        // this.getMoviesFromApi();

      } else {
        this.props.navigation.replace('Login');

      }
      // value previously stored

    } catch (e) {
      // error reading value
    }
  }

  handleEmailText = (response) => {
    this.setState({ respArr: response });
  };
 

  render() {
    return (
      <View style={styles.container}>
        <Animatable.View animation='bounceIn' duration={3500}>
          <Image
            source={require("../assets/logo.png")}
            resizeMode="contain"
            style={styles.image2}>
          </Image>
        </Animatable.View>

        <Animatable.View animation='fadeIn' duration={3500}>


          <LottieView style={styles.icon}
            source={require('../assets/loader.json')}
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

        </Animatable.View>
        {/* <Animatable.View  animation='fadeIn' duration={4500}> */}

        <Button onPress={
          this.getData.bind(this)

        } style={styles.startBtn}><Text style={styles.btnText}>Get Start</Text></Button>
        {/* </Animatable.View> */}

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  icon: {
    top: 160,
    width: 100,
    left: 65,

  },
  image2: {
    top: 100,
    left: 60,
    width: 250,
    height: 252,
    position: "absolute",
  },
  startBtn: {
    alignSelf: 'center',
    width: 120,
    backgroundColor: '#48dbfb',
    borderRadius: 25,
    top: 350,
    color: 'white'
  },
  btnText: {
    color: 'white',
  }

});

