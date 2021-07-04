import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, Image, View } from 'react-native';
import { Card } from 'react-native-paper';


import LottieView from 'lottie-react-native';


export default class Income extends Component {
  componentDidMount() {
    this.animation.play();
    this.animation.play(0, 120);

  }
  render() {
    return (

      <ScrollView style={styles.container}>


        <Text style={{ top: 0, fontSize: 26, alignSelf: 'center', padding: 20, color: '#440A67' }}>MY Wallet - Expenses </Text>
       
        <Card style={styles.card}>
          <Text style={{ top: 0, padding: 5, color: '#185ADB', fontSize: 20, }}>Expenses</Text>

          <View style={{ borderBottomColor: '#dcdde1', borderBottomWidth: 1, }} />

          <LottieView style={styles.icon3}
            ref={animation => {
              this.animation = animation;
            }}
            source={require('../assets/mexp.json')}
          ></LottieView>
          <Text style={{ color: '#185ADB', fontSize: 35, top: -60, left: 10 }}>Rs.18200.00</Text>


        </Card>
      
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 1,
    backgroundColor: '#fcfcfc',

  },
  icon3: {
    width: 130,
    left: 100,

  },
 
  card: {
    borderRadius: 25,
    position: 'relative',
   
    marginBottom: 20,
    padding: 10,
    left: 12,
    width: 335,
    height: 200,
    shadowColor: "#dcdde1",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    borderBottomWidth: 18,
    borderBottomColor: '#440A67',

    elevation: 4,
    // backgroundColor: "#140735"
  },
 
c2:{
  borderBottomColor: '#185ADB',
}


});