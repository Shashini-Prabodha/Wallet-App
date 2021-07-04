import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, Image, View, TextInput, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import LottieView from 'lottie-react-native';
import ListCard from './CardItem';
import { Value } from 'react-native-reanimated';
import { black } from 'react-native-paper/lib/typescript/styles/colors';


export default class Income extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text1: '',
      text2: '',
      noteArray: [],
      noteText: '',
    }
  }


  componentDidMount() {
    this.animation.play();
    this.animation.play(0, 120);

  }
  render() {
    let notes = this.state.noteArray.map((val, key) => {
      return <ListCard key={key} keyval={key} val={val} description='some text' price='5000' />
    });


    return (
      <ScrollView style={styles.container}>


        {/* <Text style={{ top: 0, fontSize: 26, alignSelf: 'center', padding: 20, color: '#440A67' }}>MY Wallet - Income </Text> */}

        <Card style={styles.card}>

          <Text style={{ top: 0, padding: 5, color: '#AF0069', fontSize: 20, }}>Income</Text>

          <View style={{ borderBottomColor: '#dcdde1', borderBottomWidth: 1, }} />

          <LottieView style={styles.icon2}
            ref={animation => {
              this.animation = animation;
            }}
            source={require('../assets/mp.json')}
          ></LottieView>

          <Text style={{ color: '#AF0069', fontSize: 35, top: -110, left: 10 }}>Rs.50000.00</Text>

        </Card>
        <View style={styles.addView} >
          <TextInput style={styles.textInput} placeholder='Add Income' onChange={(noteText) => this.setState({ noteText })} value={this.state.noteText}></TextInput>

          <TextInput style={styles.textInputIncome} placeholder='Price(Rs.)' keyboardType="numeric"></TextInput>

          <TouchableOpacity style={styles.addBtn}
            onPress={this.addNote.bind(this)}
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
    if (this.state.noteText) {
      var d = new Date();
      alert(''+this.state.noteArray.length);
      this.state.noteArray.push({
        'date': d.getFullYear,
      });
      this.setState({ noteArray: this.state.noteArray })
      this.setState({ noteText: '' })

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
    marginTop:70,
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
    height:10,
    margin:0,

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