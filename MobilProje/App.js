import Checkbox from 'expo-checkbox';
import React, { useState, useEffect } from 'react';
import { Accelerometer } from 'expo-sensors';
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity, } from 'react-native';
import { Card } from 'react-native-paper';
import AssetExample from './components/AssetExample';

export default function App() {
  const [isChecked1, setChecked1 ] = useState(false);
  const [isChecked2, setChecked2 ] = useState(false);
  const [isChecked3, setChecked3 ] = useState(false);
  const [isChecked4, setChecked4 ] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Checkbox style={styles.checkbox} value={isChecked1} onValueChange={setChecked1} />
        <Text style={styles.paragraph}>s1</Text>
        <Checkbox style={styles.checkbox} value={isChecked2} onValueChange={setChecked2} />
        <Text style={styles.paragraph}>s2</Text>
        <Checkbox style={styles.checkbox} value={isChecked3} onValueChange={setChecked3} />
        <Text style={styles.paragraph}>s3</Text>
        <Checkbox style={styles.checkbox} value={isChecked4} onValueChange={setChecked4} />
        <Text style={styles.paragraph}>s4</Text>
      </View>

      <View>
        <Button
          title="Başlat"
          color="#660066"
          onPress={() => Alert.alert('Başlat')}
        />
      </View>

      <Text>------------------------------------------------</Text>
      <Card>
        <AssetExample />
      </Card>
      <Text>------------------------------------------------</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
    marginVertical: 100,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    fontSize: 15,
  },
  checkbox: {
    margin: 8,
    
  },
});
