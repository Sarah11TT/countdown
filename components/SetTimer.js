import React from 'react';
import { styles } from '../styles/styles';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Dimensions,
  Platform
} from "react-native";

import { Picker } from '@react-native-picker/picker';

const formatNumber = number => `0${number}`.slice(-2);

const getRemaining = time => {
  const minutes = Math.floor(time / 60);
  const seconds = time - minutes * 60;
  return { minutes: formatNumber(minutes), seconds: formatNumber(seconds) };
};

const createArray = length => {
  const arr = [];
  let i = 0;
  while (i < length) {
    arr.push(i.toString());
    i += 1;
  }

  return arr;
};

const avaliableMinutes = createArray(60);
const avaliableSeconds = createArray(60);

export default class SetTimer extends React.Component{
  
    state = {
      remainingSeconds: 0,
      isRunning: false,
      selectedMinutes: "0",
      selectedSeconds: "0"
    };
  
    interval = null;
  
    componentDidUpdate(prevProp, prevState) {
      if (this.state.remainingSeconds === 0 && prevState.remainingSeconds !== 0) {
        this.stop();
      }
    }
  
    componentWillUnmount() {
      if (this.interval) {
        clearInterval(this.interval);
      }
    }
  
    start = () => {
      this.setState(state => ({
        remainingSeconds:
          parseInt(state.selectedMinutes, 10) * 60 +
          parseInt(state.selectedSeconds, 10),
        isRunning: true
      }));
  
      this.interval = setInterval(() => {
        this.setState(state => ({
          remainingSeconds: state.remainingSeconds - 1
        }));
      }, 1000);
    };
  
    stop = () => {
      clearInterval(this.interval);
      this.interval = null;
      this.setState({
        remainingSeconds: 0, // temporary
        isRunning: false,
        selectedMinutes: "0",
        selectedSeconds: "0"
      });
    };
  
    renderPickers = () => (
      <View style={styles.pickerContainer}>
        <Picker
          style={styles.picker}
          itemStyle={styles.pickerItem}
          selectedValue={this.state.selectedMinutes}
          onValueChange={itemValue => {
            this.setState({ selectedMinutes: itemValue });
          }}
          mode="dropdown"
        >
          {avaliableMinutes.map(value => (
            <Picker.Item key={value} label={value} value={value} />
          ))}

        </Picker>
        <Text style={styles.pickerItem}>minutes</Text>

        <Picker
          style={styles.picker}
          itemStyle={styles.pickerItem}
          selectedValue={this.state.selectedSeconds}
          onValueChange={itemValue => {
            this.setState({ selectedSeconds: itemValue });
          }}
          mode="dropdown"
        >
          {avaliableSeconds.map(value => (
            <Picker.Item key={value} label={value} value={value} />
          ))}
        </Picker>
        <Text style={styles.pickerItem}>seconds</Text>
      </View>
    );
  
    render() {
      const { minutes, seconds } = getRemaining(this.state.remainingSeconds);
  
      return (
        <View style={styles.container}>
          {/* <StatusBar barStyle="light-content" /> */}
          {this.state.isRunning ? (
            <Text style={styles.timerText}>{`${minutes}:${seconds}`}</Text>
          ) : (
            this.renderPickers()
          )}
          {this.state.isRunning ? (
            <TouchableOpacity
              onPress={this.stop}
              style={[styles.button, styles.buttonStop]}
            >
              <Text style={[styles.buttonText, styles.buttonTextStop]}>Stop</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={this.start} style={styles.button}>
              <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
          )}
        </View>
      );
    }
}