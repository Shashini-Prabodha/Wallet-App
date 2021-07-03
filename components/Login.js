import { Form, Input, Item, Label, Text } from 'native-base';

import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView, SafeAreaView } from 'react-native';
import { Card, Title, Paragraph, TextInput, Button } from 'react-native-paper';

export default class Login extends Component {
    state = {
        email: '',
    };


    handleText = (text) => {
        this.setState({ email: text });
    };

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
                                        onChangeText={(text) => this.handleText(text)}
                                    />
                                    <TextInput style={styles.input}
                                        label="Password"
                                        value={this.state.text}
                                        mode="outlined"
                                        onChangeText={(text) => this.handleText(text)}
                                    />

                                    {/* <Text>Name:{this.state.email}</Text> */}
                                    <Button style={styles.loginbtn} mode="contained" 
                                     onPress={()=>{
                                        this.props.navigation.replace('Navigation');
                                    }}>
                                        Login
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
        backgroundColor: "rgba(127,1,240,1)",
    },
    card: {
        height: 430,
        width: 361,
        position: "absolute",
        top: 122,
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
        position:"absolute"
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
        borderRadius:25
    }

});
