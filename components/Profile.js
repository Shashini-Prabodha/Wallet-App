import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity,Alert } from 'react-native'
import LottieView from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { fontSize } from 'styled-system';



export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      name: '',
      email: '',
      password: ''


    };
  }

  handleIDText = (text) => {
    this.setState({ id: text });
  };
  handleNameText = (text) => {
    this.setState({ name: text });
  };
  handleEmailText = (text) => {
    this.setState({ email: text });
  };
  handlePasswordText = (text) => {
    this.setState({ password: text });
  };


  componentDidMount() {
    this.getUserData();


  }

  getUserData = async () => {
    const id = await AsyncStorage.getItem('id')
    const name = await AsyncStorage.getItem('name')
    const email = await AsyncStorage.getItem('email')

    console.log(id + "sign")
    this.handleIDText(id)
    this.handleNameText(name)
    this.handleEmailText(email)
  }
  clearAll = async () => {
    try {
      await AsyncStorage.clear()
      this.props.navigation.navigate('Login');
    } catch(e) {
      // clear error
    }
  
    console.log('Done.')
  }
  

  render() {
    return (
      <View>
        <TouchableOpacity style={styles.icon3}
         onPress={
          this.clearAll.bind(this)
        }
        >
          <LottieView
            source={require('../assets/exit.json')}
            colorFilters={[{
              keypath: "button",
              color: "#F00000"
            }, {
              keypath: "Sending Loader",
              color: "#F00000"
            }]}
            autoPlay
            loop
            
            /></TouchableOpacity>

        <LottieView style={styles.icon}
          source={require('../assets/avator.json')}
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


        <Text style={styles.userName}>{this.state.name}</Text>
        <Text style={styles.email}>Email   :   {this.state.email}</Text>


      </View>
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 260,
    top:-10,
    alignSelf: 'center'
  },
  userName: {
    alignSelf: 'center',
    fontSize: 38,
    color: "#16a085",
    marginTop:-30,
  },
  email: {
    alignSelf: 'center',
    marginTop: 20,
    fontSize: 20,

  },
  icon3: {
    width: 26,
    height:20,
    top: 20,
    left: -5,
    padding: 20,
    alignSelf: 'flex-end',
    transform: [{ rotate: '180deg' }]
  },

})