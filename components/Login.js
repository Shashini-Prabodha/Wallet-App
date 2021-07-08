import { Form, Input, Item, Label, Text } from 'native-base';

import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView, SafeAreaView, Alert } from 'react-native';
import { Card, Title, Paragraph, TextInput, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';




export default class Login extends Component {
    state = {
        email: '',
        password: '',
    };
    componentDidMount() {
        this.getData.bind(this);
    };

    handleEmailText = (text) => {
        this.setState({ email: text });
    };
    handlePasswordText = (text) => {
        this.setState({ password: text });
    };

   
    getData = async () => {
        try {
            console.log("####")

            const email = await AsyncStorage.getItem('email');
            const password = await AsyncStorage.getItem('password');
            console.log("####" + email + " " + password)

            if (email !== null && password !== null) {
                console.log("Value is" + email + " " + password)
                if (email == this.state.email && password == this.state.password) { 
                    this.props.navigation.replace('Navigation');

                } else {
                    Alert.alert("Incorrect Email or password..! Please check or sign up")
                }
                // value previously stored
            } else {
                Alert.alert("Incorrect Email or password..! Please check or sign up")


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

                                <Button style={styles.loginbtn} mode="contained"
                                    onPress={
                                        this.getData.bind(this)
                                    }>
                                    Login
                                </Button>
                                <View style={styles.container3}>
                                    <Text style={{ color: 'grey', fontSize: 12 }}>Don't have an account ?  </Text>
                                    <TouchableOpacity onPress={() => {
                                        this.props.navigation.replace('SignUp');
                                    }}>
                                        <Text style={{ color: 'rgba(127,1,240,1)', fontSize: 12 }}>Sign Up</Text>
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </Card>
                        <View>

                        </View>
                    </View>
                </KeyboardAvoidingView>
            </View>

        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "rgba(127,1,240,1)",
    },
    card: {
        height: 430,
        width: 361,
        position: "absolute",
        top: 130,
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
        marginTop: 120,
        marginLeft: 35,
    },
    input: {
        width: 330,
        marginLeft: -20,
        padding: 8,
        backgroundColor: "white",

    },
    loginbtn: {
        marginTop: 25,
        width: 120,
        alignSelf: 'center',
        borderRadius: 25,
    },
    container3: {
        padding: 15,
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'center'
    },

});
