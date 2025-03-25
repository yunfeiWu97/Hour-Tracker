// screens/SettingsScreen.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function SettingsScreen({ navigation }) {
  const goToHourlyRate = () => {
    navigation.navigate('HourlyRate');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <TouchableOpacity style={styles.itemBox} onPress={goToHourlyRate}>
        <Text style={styles.itemText}>Set Hourly Rate</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.itemBox}>
        <Text style={styles.itemText}>VIP Features</Text>
      </TouchableOpacity>
      {/* Additional settings items */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', paddingTop: 40, paddingHorizontal: 16 },
  title: { color: '#fff', fontSize: 18, marginBottom: 20 },
  itemBox: {
    borderWidth: 1,
    borderColor: '#444',
    borderRadius: 6,
    padding: 16,
    marginBottom: 16,
  },
  itemText: { color: '#fff', fontSize: 16 },
});
