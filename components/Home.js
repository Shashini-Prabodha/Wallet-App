import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, Image, View, Button, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import * as Animatable from 'react-native-animatable';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { VictoryBar, VictoryPie } from "victory-native";
import LottieView from 'lottie-react-native';
import { RawButton } from 'react-native-gesture-handler';


export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      income: '',
      expenses: '',
      incomePres: '',
      expensesPres: ''
    };
    this.getUserData();

  }
  handleIDText = (text) => {
    this.setState({ id: text });
  };
  handleIncomeText = (text) => {
    this.setState({ income: text });
  };
  handleExpenseText = (text) => {
    this.setState({ expenses: text });
  };
  handleExpensePresText = (text) => {
    this.setState({ expensesPres: text });
  };
  handleIncomePresext = (text) => {
    this.setState({ incomePres: text });
  };



  getUserData = async () => {
    console.log("in meth sign")

    console.log(await AsyncStorage.getItem('id'))
    try {
      const id = await AsyncStorage.getItem('id')
      if (id !== null) {
        console.log(id + "sign")
        this.handleIDText(id)
        console.log(this.state.id + " => sign")
        this.getIncomePrice();
        this.getExpensePrice();

        // value previously stored
      }
      if (this.state.income !== "NaN" && this.state.income !== "") {
        this.calcPieChart();
      }
    } catch (e) {
      // error reading value
    }

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
        // const income = parseFloat(this.state.income);
        // const expenses = parseFloat(this.state.expenses);
        // console.log(parseFloat(this.state.income) + " income ");

        // // const sub=(income-expenses);
        // const inPres = (((income - expenses) / income) * 100).toFixed(2);
        // const exPres = (100 - income).toFixed(2);

        // this.handleIncomePresext(inPres);
        // this.handleExpensePresText(exPres);

        // console.log("sub val -> " + inPres + " >>>>>" + this.state.incomePres + "+++ " + exPres)

      })
      .catch((error) => console.error(error));
  }

  getExpensePrice() {
    console.log("getData Ex price" + this.state.id)

    // fetch('http://192.168.1.100:3000/income/get/income/'+this.state.id)
    fetch('http://192.168.1.100:3000/expense/get/expense/' + this.state.id, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
    })
      .then((response) => response.json())
      .then((response) => {
        let r = response
        this.handleExpenseText(response);
        console.log(r + "  expr")
        const income = parseFloat(this.state.income);
        const expenses = parseFloat(this.state.expenses);
        console.log(parseFloat(this.state.income) + " income ");

        // const sub=(income-expenses);
        const inPres = (((income - expenses) / income) * 100).toFixed(2);
        const exPres = (100 - inPres).toFixed(2);


        this.handleIncomePresext(inPres);
        this.handleExpensePresText(exPres);

        console.log("sub value@ -> " + inPres + " >>>>>" + this.state.incomePres + " +++ " + exPres)



      })
      .catch((error) => console.error(error));

  }

  // calcPieChart() {
  //   const income = parseFloat(this.state.income);
  //   const expenses = parseFloat(this.state.expenses);
  //   console.log(parseFloat(this.state.income) + " income ");

  //   // const sub=(income-expenses);
  //   const inPres = ((income - expenses) / income) * 100;
  //   const exPres = 100 - income;
  //   var x = exPres.toFixed(2);

  //   this.handleIncomePresext(inPres);
  //   this.handleExpensePresText(exPres);

  //   console.log(x + " sub val -> " + this.state.incomePres)

  // }
  handleRefresh() {
    this.getUserData();

  }
  render() {
    // this.calcPieChart();
    return (

      <ScrollView style={styles.container}>
        <TouchableOpacity style={styles.refresh}
          onPress={
            this.handleRefresh.bind(this)
          }
        >
          <LottieView
            source={require('../assets/refresh.json')}
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
        <Text style={{ top: 0, fontSize: 26, alignSelf: 'center', paddingTop: 20, color: '#440A67' }}>MY Wallet {this.props.id} </Text>
        <Animatable.View animation='pulse' duration={5000}>

          <Card style={styles.mainCard}>

            <VictoryPie style={styles.chart} animate={{ easing: 'exp' }}
              colorScale={["#ED4C67", "#fbc531"]}
              data={[
                { x: "Expense", y: this.state.expensesPres },
                { x: "Income", y: this.state.incomePres }

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
              source={require('../assets/9072-coin.json')}

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

            <Text style={{ color: 'purple', left: 70, top: -380, fontSize: 20 }}>{this.state.incomePres}%</Text>
            <Text style={{ color: 'purple', left: 265, top: -380, fontSize: 20 }}>{this.state.expensesPres}%</Text>

          </Card>
        </Animatable.View >

        <Card style={styles.card}>
          <Text style={{ top: 0, padding: 5, color: '#AF0069', fontSize: 20, }}>Income</Text>

          <View style={{ borderBottomColor: '#dcdde1', borderBottomWidth: 1, }} />

          <LottieView style={styles.icon2}
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

          <Text style={{ color: '#AF0069', fontSize: 30, top: -110, left: 10 }}>Rs.{this.state.income}</Text>


        </Card>
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

          <Text style={{ color: '#185ADB', fontSize: 30, top: -60, left: 10 }}>Rs.{this.state.expenses}</Text>


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
    position: 'relative',
    width: 345,
    height: 370,
    left: 6,
    paddingBottom: 10,
    marginBottom: 20,
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
  },
  refresh: {
    width: 55,
    height: 55,
    position: 'absolute',
    left:300
  }


});