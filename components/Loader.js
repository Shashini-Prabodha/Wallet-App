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

    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    this.animation.play(0, 120);
    setTimeout(() => {
      console.log("log");

      //  this.props.navigation.replace('Login');

    }, 2000);
  }

  getData = async () => {
    try {



      const email = await AsyncStorage.getItem('email');
      const password = await AsyncStorage.getItem('password');
      console.log("####" + email + " " + password)

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
  getDataAPI() {
    console.log("getDataAPI")
    fetch('http://192.168.1.100:3000/user')
      .then((response) => response.json())
      .then((response) => {
        let r = response
        //  console.log(r)
         this.handleEmailText(response)

        for (const i in r) {

          let x = (r[i])
          // console.log(x)
        }
        // const resp= this.resp;
        // for (const i in resp) {

        //   let x = (resp[i])
        //   console.log(x)
        // }
        console.log(this.state.respArr[0].name)
        let notes = this.state.respArr.map((val, key) => {
          // console.log(val.name);
        });

      })
      .catch((error) => console.error(error));
  }
saveData(){

}
  render() {
    return (
      <View style={styles.container}>
         <Animatable.View  animation='bounceIn' duration={3500}>
       
        </Animatable.View>
        
         <Animatable.View  animation='bounceIn' duration={3500}>

        <Image
          source={require("../assets/logo.png")}
          resizeMode="contain"
          style={styles.image2}>
        </Image>
        </Animatable.View>
        <LottieView style={styles.icon}
          ref={animation => {
            this.animation = animation;
          }}
          source={require('../assets/loader.json')}
        ></LottieView>
        <Button onPress={
          this.getData.bind(this)

        } style={styles.startBtn}><Text style={styles.btnText}>Get Start</Text></Button>
      
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