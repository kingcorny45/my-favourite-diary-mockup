import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';
import db from "../config"
import firebase from "firebase"
const bgImage = require('../assets/SeaAngel.jpg');
const appIcon = null;
const appName = null;

export default class DayDiary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dayDiaryEntry: '',
    };
  }

  addDayEntry = async(dayDiaryEntry)=>{
         db.collection("day entry").add({
      entry: dayDiaryEntry,
      time: firebase.firestore.Timestamp.now().toDate(),
      
    });
  }
  render() {
    const { dayDiaryEntry } = this.state;
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        
        <ImageBackground source={bgImage} style={styles.bgImage}>
         
          <View style={styles.upperContainer}>
        
            <Image source={appIcon} style={styles.appIcon} />
            <Image source={appName} style={styles.appName} />
          </View>
          <View style={styles.lowerContainer}>
           
            <View style={styles.textinputContainer}>
              <TextInput
                style={styles.textinput}
                placeholder={'write what happened today'}
                placeholderTextColor={'#FFFFFF'}
                multiline={true}
                numberOfLines={10}
                value={dayDiaryEntry}
                onChangeText={(text) => this.setState({ dayDiaryEntry: text })}
              />
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style = {styles.button}
              onPress = {this.addDayEntry(dayDiaryEntry)}
              >
                <Text style = {styles.buttonText}>+Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  bgImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  upperContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  appIcon: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginTop: 80,
  },
  appName: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  lowerContainer: {
    flex: 0.75,
    alignItems: 'left',
  },
  textinputContainer: {
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#9DFD24',
    borderColor: '#FFFFFF',
  },
  textinput: {
    width: '100%',
    height: 80,
    padding: 5,
    borderColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 3,
    fontSize: 18,
    backgroundColor: '#5653D4',
    fontFamily: 'Rajdhani_600SemiBold',
    color: '#FFFFFF',
  },
  scanbuttonText: {
    fontSize: 24,
    color: '#0A0101',
    fontFamily: 'Rajdhani_600SemiBold',
  },
  button: {
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F48D20',
    borderRadius: 30,
  },
  buttonText: {
    fontSize: 24,
    color: '#FFFFFF',
    fontFamily: 'Rajdhani_600SemiBold',
  },
  buttonContainer:{
   marginLeft:260,
   marginTop:30,
  justifyContent:"right",
  flex:0.75,
  alignItems:"right"
  },
});
