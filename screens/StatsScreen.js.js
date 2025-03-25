// screens/StatsScreen.js
import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function StatsScreen() {
  const [monthlyHours, setMonthlyHours] = useState(34);
  const [monthlyIncome, setMonthlyIncome] = useState(537.2);

  // Sample log data
  const [logData, setLogData] = useState([
    { date: '03/25 (Sat)', hours: 5, wage: 15.8 },
    { date: '03/20 (Mon)', hours: 4.25, wage: 15.8 },
    { date: '03/15 (Wed)', hours: 5.5, wage: 15.8 },
    // Add more log entries as needed
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monthly Hours: {monthlyHours}h</Text>
      <Text style={styles.title}>Monthly Income: ¥{monthlyIncome.toFixed(2)}</Text>
      <FlatList
        data={logData}
        keyExtractor={(item, index) => String(index)}
        style={{ marginTop: 20 }}
        renderItem={({ item }) => {
          const income = (item.hours * item.wage).toFixed(2);
          return (
            <View style={styles.logItem}>
              <View>
                <Text style={styles.logDate}>{item.date}</Text>
                <Text style={styles.logHours}>{item.hours} hours</Text>
              </View>
              <Text style={styles.logIncome}>¥{income}</Text>
            </View>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', paddingTop: 40, paddingHorizontal: 16 },
  title: { color: '#fff', fontSize: 16, marginBottom: 4 },
  logItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: '#333',
  },
  logDate: { color: '#fff', fontSize: 14, marginBottom: 4 },
  logHours: { color: '#aaa', fontSize: 12 },
  logIncome: { color: '#fff', fontSize: 16, alignSelf: 'center' },
});
