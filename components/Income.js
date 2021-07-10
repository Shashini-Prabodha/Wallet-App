import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, Image, View, TextInput, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import LottieView from 'lottie-react-native';
import ListCard from './CardItem';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default class Income extends Component {
  constructor(props) {
    super(props);
    this.txtExpenses = React.createRef();
    this.txtPrice = React.createRef();
    this.state = {
      id: '',
      price: '',
      date: '',
      noteArray: [],
      category: '',
      tempArray: [],
      income:''
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
  handleIncomeText = (text) => {
    this.setState({ income: text });
  };


  getData = async () => {
    try {
      const id = await AsyncStorage.getItem('id')
      if (id !== null) {
        console.log(id + "sign")
        this.handleIDText(id)
        this.getIncomePrice();
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

  getIncomePrice() {
    console.log("getData Income price" + this.state.id)

    // fetch('http://192.168.1.100:3000/income/get/income/'+this.state.id)
    fetch('http://192.168.1.100:3000/income/get/income/' + this.state.id, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then((response) => response.json())
      .then((response) => {
        let r = response
        console.log(r)
        this.handleIncomeText(response)

      })
      .catch((error) => console.error(error));
  }


  saveIncome() {
    this.ShowCurrentDate();
    console.log(this.state.id + " " + this.state.category + " " + this.state.date + " " + this.state.price)

    fetch('http://192.168.1.100:3000/income', {
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


        {/* <Text style={{ top: 0, fontSize: 26, alignSelf: 'center', padding: 20, color: '#440A67' }}>MY Wallet - Income </Text> */}

        <Card style={styles.card}>

          <Text style={{ top: 0, padding: 5, color: '#AF0069', fontSize: 20, }}>Income</Text>

          <View style={{ borderBottomColor: '#dcdde1', borderBottomWidth: 1, }} />

          {
            <LottieView style={styles.icon3}
              source={require('../assets/mp.json')}
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
          }

          <Text style={{ color: '#AF0069', fontSize: 35, top: -100, left: 10 }}>Rs.{this.state.income}</Text>

        </Card>
        <View style={styles.addView} >
          <TextInput style={styles.textInput} ref={this.txtExpenses} placeholder='Add Income Type' onChangeText={(text) => this.handlecategory(text)} value={this.state.text}></TextInput>

          <TextInput style={styles.textInputIncome} ref={this.txtPrice} placeholder='Income(Rs.)' onChangeText={(text) => this.handlePriceText(text)} value={this.state.text} keyboardType="numeric"></TextInput>

          <TouchableOpacity style={styles.addBtn}
            onPress={this.saveIncome.bind(this)}
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
      alert('Added Successfully...!')
      this.getIncomePrice();
      this.state.noteArray.push({
        //'date': d.getFullYear,
      });
      this.setState({ noteArray: this.state.noteArray })
      this.txtExpenses.current.clear();
      this.txtPrice.current.clear();


    } else {
      alert("Please Input Income Type/Price")
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
    borderBottomColor: '#822659',

    elevation: 4,
  },

  c2: {
    borderBottomColor: '#185ADB',
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
  textInputIncome: {
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
    borderColor: '#822659',
  },
  addBtntext: {
    fontSize: 30,
    alignSelf: 'center',
    color: '#822659',

  },


});