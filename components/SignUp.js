import { Form, Input, Item, Label, Text } from 'native-base';

import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView, SafeAreaView ,Alert} from 'react-native';
import { Card, Title, Paragraph, TextInput, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default class SignUp extends Component {
    state = {
        name: '',
        email: '',
        password: '',
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

    storeData = async (name, email, password) => {
        try {
            name: this.state.name;
            email: this.state.email;
            password: this.state.password;
            if (this.state.name && this.state.email && this.state.password) {
                // if (this.getData.bind(this)) {
                if (email !== null && password !== null && name !== null) {
                    await AsyncStorage.setItem("name", this.state.name);
                    await AsyncStorage.setItem("email", this.state.email);
                    await AsyncStorage.setItem("password", this.state.password);

                    console.log("11" + this.state.email + " " + this.state.password)
                    console.log("press");

                    this.props.navigation.replace('Navigation');
                } else {
                    Alert.alert("Incorrect Email or password..! Please check or sign up")
                }
                // } else {
                //     Alert.alert("Incorrect Email or password..! Please check or sign up")
                // }
                Alert.alert("Data Saved !")

            } else {
                Alert.alert("Please input Email / Password / Name")
            }

        } catch (e) {
            // saving error
        }
    }


    saveUser(){
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

            <View style={styles.container}>
                <KeyboardAvoidingView style={styles.container} behavior="position">
                    <View style={styles.container1}>

                        <Card
                            style={styles.card}>
                            <Image
                                source={require("../assets/logo.png")}
                                resizeMode="contain"
                                style={styles.image2}>
                            </Image>

                            <View style={styles.container2}>
                                <TextInput style={styles.input}
                                    label="Name"
                                    value={this.state.text}
                                    mode="outlined"
                                    onChangeText={(text) => this.handleNameText(text)}
                                />
                                <TextInput style={styles.input}
                                    label="Email"
                                    value={this.state.text}
                                    mode="outlined"
                                    onChangeText={(text) => this.handleEmailText(text)}
                                />
                                <TextInput style={styles.input}
                                    label="Password"
                                    value={this.state.text}
                                    mode="outlined"
                                    onChangeText={(text) => this.handlePasswordText(text)}
                                />

                                {/* <Text>Name:{this.state.email}</Text> */}
                                <Button style={styles.loginbtn} mode="contained"
                                    onPress={
                                        this.storeData.bind(this)
                                    }>
                                    Sign Up
                                </Button>

                            </View>
                        </Card>
                    </View>
                </KeyboardAvoidingView>
            </View>

        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0fbcf9",
    },
    card: {
        height: 490,
        width: 361,
        position: "absolute",
        top: 80,
        borderTopRightRadius: 51,
        borderTopLeftRadius: 51,
        shadowColor: "rgba(0,0,0,1)",
        shadowOffset: {
            width: 0,
            height: -2
        },
        elevation: 36,
        shadowOpacity: 0.35,
        shadowRadius: 12,
        left: 11
    },
    image2: {
        top: -100,
        left: 75,
        width: 220,
        height: 222,
        position: "absolute",
    },

    container1: {
        width: 375,
        height: 596,
        marginTop: 60,
        marginLeft: -12,
        position: "absolute"
    },

    container2: {
        alignContent: 'center',
        width: 290,
        height: 596,
        marginTop: 130,
        marginLeft: 35,
    },
    input: {
        width: 330,
        marginLeft: -20,
        padding: 10,
        backgroundColor: "white"
    },
    loginbtn: {
        marginTop: 35,
        width: 120,
        alignSelf: 'center',
        borderRadius: 25
    }

});
