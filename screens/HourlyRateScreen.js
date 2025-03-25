import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HourlyRateScreen({ navigation }) {
  const [hourlyRate, setHourlyRate] = useState('');

  useEffect(() => {
    const loadRate = async () => {
      try {
        const savedRate = await AsyncStorage.getItem('@hourlyRate');
        if (savedRate) setHourlyRate(savedRate);
      } catch (error) {
        console.log(error);
      }
    };
    loadRate();
  }, []);

  const handleSave = async () => {
    try {
      await AsyncStorage.setItem('@hourlyRate', hourlyRate);
      navigation.goBack();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Set Hourly Rate</Text>
      <TextInput
        style={styles.input}
        placeholder="e.g., 15.8"
        placeholderTextColor="#666"
        keyboardType="numeric"
        value={hourlyRate}
        onChangeText={setHourlyRate}
      />
      <Button title="Save" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 16, paddingTop: 40 },
  title: { color: '#fff', fontSize: 20, marginBottom: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 6,
    color: '#fff',
    padding: 10,
    marginBottom: 16,
  },
});
