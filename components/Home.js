import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, Image, View } from 'react-native';
import { Card } from 'react-native-paper';


import { VictoryBar, VictoryPie } from "victory-native";
import LottieView from 'lottie-react-native';


export default class Home extends Component {
  componentDidMount() {
    this.animation.play();
    this.animation.play(0, 120);

  }
  render() {
    return (

      <ScrollView style={styles.container}>


        <Text style={{ top: 0, fontSize: 26, alignSelf: 'center', paddingTop: 20, color: '#440A67' }}>MY Wallet</Text>
        <Card style={styles.mainCard}>
          <VictoryPie style={styles.chart} animate={{ easing: 'exp' }}
            colorScale={["#ED4C67", "#fbc531"]}
            data={[
              { x: "Expense", y: 60 },
              { x: "Income", y: 40 }

            ]}

            innerRadius={83}
            style={{
              labels: {
                fill: '#440A67', fontSize: 15, padding: -20
              },
            }}

          >

          </VictoryPie>

        <LottieView style={styles.icon}
          ref={animation => {
            animation.play();
            animation.play(0, 120);
          }}
          source={require('../assets/9072-coin.json')}
        ></LottieView>
        <Text style={{ color: 'white', left: 70, top: -380, fontSize: 20 }}>40%</Text>
        <Text style={{ color: 'white', left: 265, top: -380, fontSize: 20 }}>60%</Text>
        </Card>
        <Card style={styles.card}>
          <Text style={{ top: 0, padding: 5, color: '#AF0069', fontSize: 20, }}>Income</Text>

          <View style={{ borderBottomColor: '#dcdde1', borderBottomWidth: 1, }} />

          <LottieView style={styles.icon2}
            ref={animation => {
              animation.play();
              animation.play(0, 120);
            }}
            source={require('../assets/mp.json')}
          ></LottieView>
          <Text style={{ color: '#AF0069', fontSize: 35, top: -110, left: 10 }}>Rs.50000.00</Text>


        </Card>
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
  mainCard: {
    position:'relative',
    width:345,
    height:370,
    left:6,
    paddingBottom:10,
    marginBottom:20,
    shadowColor: "#dcdde1",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    borderBottomWidth: 18,
    borderBottomColor: '#93329E',

    elevation: 4,
  },
  icon: {
    top: -130,
    width: 80,
    left: 70,

  },
  icon2: {
    width: 150,
    left: 100,

  },
  icon3: {
    width: 130,
    left: 100,

  },
  chart: {
    position: 'relative',
    top: -200,
    margin: 0
  },
  card: {
    borderRadius: 25,
    position: 'relative',
    top: 0,
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
    borderBottomColor: '#93329E',

    elevation: 4,
    // backgroundColor: "#140735"
  },
  image2: {
    position: 'relative',
    top: -10,

    left: -150,
    width: 750,
    height: 150,
  },
  image3: {
    position: 'relative',
    top: 150,
    left: -150,
    width: 750,
    height: 150,
  },
  c2: {
    borderBottomColor: '#185ADB',
  }


});