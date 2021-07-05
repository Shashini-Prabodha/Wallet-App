import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, Image, View, TextInput, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import LottieView from 'lottie-react-native';
import ListCard from './CardItem';


export default class Income extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: '',
      noteArray: [],
      noteText: '',
      tempArray:[]
    }
  }

  componentDidMount() {
    
    this.animation.play();
    this.animation.play(0, 120);

  };

  handleNoteText = (text) => {
    this.setState({ noteText: text });
  };
  handlePriceText = (text) => {
    this.setState({ price: text });
  };

  render() {
    let notes = this.state.noteArray.map((val, key) => {
      console.log(key);
      return <ListCard key={key} keyval={key} val={val} description={this.state.noteText} price={this.state.price} />
    });


    return (
      <ScrollView style={styles.container}>


        {/* <Text style={{ top: 0, fontSize: 26, alignSelf: 'center', padding: 20, color: '#440A67' }}>MY Wallet - Income </Text> */}

        <Card style={styles.card}>

          <Text style={{ top: 0, padding: 5, color: '#AF0069', fontSize: 20, }}>Income</Text>

          <View style={{ borderBottomColor: '#dcdde1', borderBottomWidth: 1, }} />

          { <LottieView style={styles.icon2}
            ref={animation => {
              this.animation = animation;
            }}
            source={require('../assets/mp.json')}
          ></LottieView> }

          <Text style={{ color: '#AF0069', fontSize: 35, top: -110, left: 10 }}>Rs.00.00</Text>

        </Card>
        <View style={styles.addView} >
          <TextInput style={styles.textInput} placeholder='Add Income Type' onChangeText={(text) => this.handleNoteText(text)} value={this.state.text}></TextInput>

          <TextInput style={styles.textInputIncome} placeholder='Income(Rs.)' onChangeText={(text) => this.handlePriceText(text)} value={this.state.text} keyboardType="numeric"></TextInput>

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
    if (this.state.noteText && this.state.price) {
      var d = new Date();
      alert('' + this.state.noteArray.length);
      this.state.noteArray.push({
        'date': d.getFullYear,
      });
      this.setState({ noteArray: this.state.noteArray })
      // this.setState({ noteText: '' });
      // this.setState({ price: '' });


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