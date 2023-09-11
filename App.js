import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Alert,
  SafeAreaView,
} from 'react-native';

export default function App() {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(number1 + number2);

  function addTogether() {
    const newTotal = number1 + number2;
    setTotal(newTotal);
    Alert.alert('Calculator', 'The Sum Is: ' + newTotal); // total has the old value in the render
  }
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        value={number1}
        placeholder="Enter First Number"
        keyboardType="numeric"
        onChangeText={(e) => {
          setNumber1(Number.parseInt(e));
        }}
      />
      <TextInput
        value={number2}
        style={styles.input}
        onChangeText={(e) => {
          setNumber2(Number.parseInt(e));
        }}
        placeholder="Enter Second Number"
        keyboardType="numeric"
      />
      <Button
        title="Calculate Sum"
        onPress={addTogether}
        style={styles.calculate}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 25,
    borderWidth: 1,
    padding: 10,
  },
  calculate: { height: 40, margin: 25, borderWidth: 1, padding: 10 },
});
