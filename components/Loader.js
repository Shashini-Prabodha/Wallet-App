import React, { Component } from 'react';
import { View, StyleSheet,Image } from 'react-native';

import LottieView from 'lottie-react-native';

export default class Loader extends Component {
  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    this.animation.play(0, 120);
    setTimeout(() => {
             this.props.navigation.replace('Login');

        }, 2000);
  }

  render() {
    return (
        <View  style={styles.container}>
      <LottieView style={styles.icon}
        ref={animation => {
          this.animation = animation;
        }}
        source={require('../assets/loader.json')}
      ></LottieView>
      <Image
      source={require("../assets/logo.png")}
      resizeMode="contain"
      style={styles.image2}>
  </Image>
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
        left: 70,

    },
    image2: {
        top: 100,
        left: 60,
        width: 250,
        height: 252,
        position: "absolute",
    },

});