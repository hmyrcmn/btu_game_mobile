import React, { useState } from 'react';
import { StyleSheet, Button, Text, Alert, TouchableOpacity, View } from 'react-native';
//import { Permission } from 'react-native';
import Permission_page from "./screens/Permission_page";
const App = () => {
  const [features, setFeature] = useState([]);
  const options = ['camera'];

  function pickFeatures(selectedFeature) {

    if (features.includes(selectedFeature)) {
      selectedFeature(features.filter(Feature => Feature !== selectedFeature))
      return;
    }
    setFeature(Feature => Feature.concat(selectedFeature))
  }

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
          
      <View style={styles.options}>
        <Button
          title="Seç"
          color="#660066"
          onPress={App}
         // onPress={() => navigation.navigate('Permission_page', { name: 'About Page' })}
        />
      </View>
      </View>


    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    margin: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  options: {
    flexDirection: 'row',
    alignSelf: 'baseline',
    marginLeft: 5,

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

