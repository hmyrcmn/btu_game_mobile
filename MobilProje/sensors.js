import React, { useState, useEffect } from 'react';
import { StyleSheet, Button, Text, Alert, TouchableOpacity, View } from 'react-native';
import { Accelerometer } from 'expo-sensors';


const App = () => {
  const [features, setFeature] = useState([]);
  const options = ['s1','s2','s3','s4'];

  return (
    <View style={styles.container}>
      <View style={styles.options}>
        {
          options.map(option => (
            <View key={option} style={styles.features}>
              <TouchableOpacity style={styles.checkBox} onPress={() => pickFeatures(option)}>
                {features.includes(option) && (<Text style={styles.check}>x</Text>)}
              </TouchableOpacity>
              <Text style={styles.featureName}>{option}</Text>
            </View>

          ))}
      </View>
    </View>
  );
 
};

export default App;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    margin: 30,
    flex: 2,
  },
  options: {
    flexDirection: 'row',
    alignSelf: 'baseline',
    marginLeft: 10,
  },
  features: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  checkBox: {

    width: 25,
    height: 25,
    borderWidth: 2,
    borderColor: 'green',
    marginRight: 5,
  },
  featureName: {
    textTransform: 'capitalize',
    fontSize: 16,
  },
  check: {
    alignSelf: 'center',
  },
});