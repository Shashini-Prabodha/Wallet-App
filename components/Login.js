import { Text } from 'native-base';

import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView, SafeAreaView, Alert } from 'react-native';
import { Card, Title, TextInput, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';




export default class Login extends Component {
    state = {
        id: '',
        name: '',
        email: '',
        password: '',
    };
    componentDidMount() {
        // this.getData.bind(this);
    };


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


    getUser() {
        console.log("getDataAPI" + this.state.email)
        if (this.state.email !== null && this.state.email != "") {
            fetch('http://192.168.1.100:3000/user/get/email/' + this.state.email, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            })
                .then((response) => response.json())
                .then((response) => {
                    let r = response.email
                    console.log(r + "r")
                    if (this.state.email == response.email) {
                        if (this.state.password == response.password) {
                            console.log('true');
                            this.handleEmailText(response.email)
                            this.handleIDText(response._id)
                            this.handleNameText(response.name)
                            this.handlePasswordText(response.password)
                            console.log(this.state.name + " - " + this.state.email + " - " + this.state.password + " - " + this.state.id);

                            this.storeData.bind(this);
                            AsyncStorage.setItem("id", this.state.id);
                            AsyncStorage.setItem("name", this.state.name);
                            AsyncStorage.setItem("email", this.state.email);
                            AsyncStorage.setItem("password", this.state.password);
                            this.props.navigation.replace('Navigation');
                            return true;
                        } else {
                            console.log('false');
                            Alert.alert("Incorrect password..! Please check or sign up")

                            return false;
                        }
                    } else {
                        Alert.alert("Incorrect your email..! Please check or create Account")

                    }

                })
                .catch((error) =>                         
                Alert.alert("Incorrect your email..! Please check or create Account")
                );
        } else {
            Alert.alert("Please check your Email...!")

        }
    }

    // getData = async () => {
    //     try {
    //         console.log("####")

    //         const email = await AsyncStorage.getItem('email');
    //         const password = await AsyncStorage.getItem('password');
    //         console.log("####" + email + " " + password)

    //         if (email !== null && password !== null) {
    //             console.log("Value is" + email + " " + password)
    //             if (email == this.state.email && password == this.state.password) {
    //                 this.props.navigation.replace('Navigation');

    //             } else {
    //                 Alert.alert("Incorrect Email or password..! Please check or sign up")
    //             }
    //             // value previously stored
    //         } else {
    //             //  Alert.alert("Incorrect Email or password..! Please check or sign up")

    //             this.getUser();

    //         }
    //     } catch (e) {
    //         // error reading value
    //     }
    // }

    storeData = async () => {
        try {
            const id = this.state.id;
            const name = this.state.name;
            const email = this.state.email;
            const password = this.state.password;
            // if (his.state.name && this.state.email && this.state.password) {
            // if (this.getData.bind(this)) {
            // if (email == null ) {
            // Alert.alert("Please input Email / Password / Name")


            // this.props.navigation.replace('Navigation');
            // } else {
            // this.getUser();
            await AsyncStorage.setItem("id", this.state.id);
            await AsyncStorage.setItem("name", this.state.name);
            await AsyncStorage.setItem("email", this.state.email);
            await AsyncStorage.setItem("password", this.state.password);

            console.log("Sig up=> " + this.state.id + " " + this.state.email + " " + this.state.password)
            console.log("press");
            this.props.navigation.replace('Navigation');

            // Alert.alert("Incorrect Email or password..! Please check or sign up")
            // }
            // } else {
            //     Alert.alert("Incorrect Email or password..! Please check or sign up")
            // }

            // } else {

            // Alert.alert("Please input Email / Password / Name")
            // }

        } catch (e) {
            // saving error
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
                                secureTextEntry={true} 
                                    label="Password"
                                    value={this.state.text}
                                    mode="outlined"
                                    onChangeText={(text) => this.handlePasswordText(text)}
                                />

                                <Button style={styles.loginbtn} mode="contained"
                                    onPress={
                                        this.getUser.bind(this)
                                    }>
                                    Login
                                </Button>
                                <View style={styles.container3}>
                                    <Text style={{ color: 'grey', fontSize: 12 }}>Don't have an account ?  </Text>
                                    <TouchableOpacity onPress={() => {
                                        this.props.navigation.navigate('SignUp');
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
