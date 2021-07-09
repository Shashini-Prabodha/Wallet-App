import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, Image, View, TextInput, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import LottieView from 'lottie-react-native';
import ListCard from './CardItem';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default class Expense extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      price: '',
      date: '',
      noteArray: [],
      category: '',
      tempArray: []
    }
  }

  componentDidMount() {

    this.getData();

  }
  handlecategory = (text) => {
    this.setState({ category: text });
  };
  handlePriceText = (text) => {
    this.setState({ price: text });
  };
  handleIDText = (text) => {
    this.setState({ id: text });
  };
  handleDateText = (text) => {
    this.setState({ date: text });
  };
  getData = async () => {
    try {
      const id = await AsyncStorage.getItem('id')
      if (id !== null) {
        console.log(id + "sign")
        this.handleIDText(id)
        // value previously stored
      }
    } catch (e) {
      // error reading value
    }
  }

  ShowCurrentDate = () => {

    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    const today = date + '-' + month + '-' + year;
    console.log("today " + today);
    this.handleDateText(today)
  }

  // storeData = async () => {
  //   try {
  //     id: this.state.id;
  //     category: this.state.category;
  //     price: this.state.price;
  //     date: this.state.date;
  //     if (this.state.category && this.state.price) {

  //       if (id !== null && category !== null && price !== null) {
  //         this.saveUser();

  //         await AsyncStorage.setItem("id", this.state.id);
  //         await AsyncStorage.setItem("category", this.state.category);
  //         await AsyncStorage.setItem("price", this.state.price);
  //         await AsyncStorage.setItem("date", this.state.date);

  //         console.log("Sig up=> " + this.state.id + " " + this.state.email + " " + this.state.password)
  //         console.log("press");

  //         this.props.navigation.replace('Navigation');
  //       } else {
  //         Alert.alert("Incorrect Email or password..! Please check or sign up")
  //       }
  //       // } else {
  //       //     Alert.alert("Incorrect Email or password..! Please check or sign up")
  //       // }

  //     } else {
  //       Alert.alert("Please input Email / Password / Name")
  //     }

  //   } catch (e) {
  //     // saving error
  //   }
  // }


  saveExpense() {
    this.ShowCurrentDate();
    console.log(this.state.id + " " + this.state.category + " " + this.state.date + " " + this.state.price)

    fetch('http://192.168.1.101:3000/expense', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        category: this.state.category,
        price: this.state.price,
        date: this.state.date,
        userID: this.state.id,

      })

    }).then((response) => response.json())
      .then((response) => {
        let text = response
        // this.handleIDText(text._id)
        console.log(text._id);
        this.addNote();
      }).catch((error) => console.log(error));
  }

  render() {
    let notes = this.state.noteArray.map((val, key) => {
      console.log(key);

      return <ListCard key={key} keyval={key} val={val} description={this.state.category} price={this.state.price} />
    });


    return (
      <ScrollView style={styles.container}>


        {/* <Text style={{ top: 0, fontSize: 26, alignSelf: 'center', padding: 20, color: '#440A67' }}>MY Wallet - Expense </Text> */}


        <Card style={styles.card}>
          <Text style={{ top: 0, padding: 5, color: '#185ADB', fontSize: 20, }}>Expenses</Text>

          <View style={{ borderBottomColor: '#dcdde1', borderBottomWidth: 1, }} />

          <LottieView style={styles.icon3}
            source={require('../assets/mexp.json')}
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
          <Text style={{ color: '#185ADB', fontSize: 35, top: -60, left: 10 }}>Rs.18200.00</Text>


        </Card>
        <View style={styles.addView} >
          <TextInput style={styles.textInput} placeholder='Add Expense Type' onChangeText={(text) => this.handlecategory(text)} value={this.state.text}></TextInput>

          <TextInput style={styles.textInputExpense} placeholder='Expense(Rs.)' onChangeText={(text) => this.handlePriceText(text)} value={this.state.text} keyboardType="numeric"></TextInput>

          <TouchableOpacity style={styles.addBtn}
            onPress={this.saveExpense.bind(this)}
          >

            <Text style={styles.addBtntext}>+</Text>

          </TouchableOpacity>

        </View>


        <View style={styles.scrollView}>
          {notes}

        </View>
      </ScrollView>
    )
  }

  addNote() {
    if (this.state.category && this.state.price) {
      var date = new Date();
      alert('' + this.state.noteArray.length);
      this.state.noteArray.push({
        //'date': d.getFullYear,
      });
      this.setState({ noteArray: this.state.noteArray })
      // this.setState({ category: '' });
      // this.setState({ price: '' });


    } else {
      alert("Please Input Expense Type/Price")
    }

  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 1,
    backgroundColor: '#fcfcfc',

  },
  scrollView: {
    //     flex: 1,
    //     position:'relative',
    marginTop: 70,
    //     height:550,
    //     paddingHorizontal: 1,
    //     backgroundColor: '#fcfcfc',
    //     borderColor:'black',
    // borderWidth:5,
    // flexGrow:1,

  },

  icon2: {
    width: 150,
    left: 100,
    top: -10,

  },
  icon3: {
    width: 130,
    left: 100,

  },
  card: {
    borderRadius: 25,
    position: 'relative',
    marginTop: 10,
    marginBottom: 20,
    padding: 10,
    left: 12,
    width: 335,
    height: 180,
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
  },

  c2: {
    borderBottomColor: '#440A67',
  },
  addView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    height: 10,
    margin: 0,

  },
  textInput: {
    width: 160,
    paddingLeft: 20,
    left: 5,
    backgroundColor: 'white',
    margin: 4,
    borderRadius: 25,
    shadowColor: "#dcdde1",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  textInputExpense: {
    width: 125,
    paddingLeft: 20,
    left: 5,
    backgroundColor: 'white',
    margin: 4,
    borderRadius: 25,
    shadowColor: "#dcdde1",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  addBtn: {
    backgroundColor: 'white',
    width: 47,
    height: 47,
    left: 2,
    margin: 5,
    borderRadius: 100,
    shadowColor: "#dcdde1",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderWidth: 3,
    borderColor: '#440A67',
  },
  addBtntext: {
    fontSize: 30,
    alignSelf: 'center',
    color: '#440A67',

  },


});