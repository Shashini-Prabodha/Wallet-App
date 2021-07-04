import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Card } from 'react-native-paper';
import LottieView from 'lottie-react-native';


export default class CardItem extends Component {
  componentDidMount() {
    this.animation.play();
    this.animation.play(0, 120);

  }
  render() {
    return (
      <View>
        <Card style={styles.card}>
          <LottieView style={styles.icon2}
            ref={animation => {
              this.animation = animation;
            }}
            source={require('../assets/coin.json')}
          ></LottieView>
          <Text style={{ top: -40, left: 50, position: 'relative', color: 'black', fontSize: 20, }}>{this.props.description}</Text>
          <Text style={{ top: -65, left: 200, position: 'relative', color: 'black', fontSize: 20, }}>{this.props.price}</Text>
          <TouchableOpacity  style={styles.delBtn}><Image
            source={require("../assets/icon/bin.png")}
            resizeMode="contain"
            style={styles.image2}>
          </Image>
          </TouchableOpacity>
        </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 1,
    backgroundColor: '#fcfcfc',

  },

  icon2: {
    width: 45,
    top: 0,

  },

  card: {
    // flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 10,
    position: 'relative',
    marginTop: 10,
    marginBottom: 20,
    padding: 10,
    left: 10,
    width: 340,
    height: 60,
    shadowColor: "#dcdde1",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,

  },
  delBtn: {
    width: 25,
    left: 300,
    top: -105,
    shadowColor: "#dcdde1",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  
  },
  image2: {
    width: 20,
    // left: 305,
    // top: -105,

  },
})