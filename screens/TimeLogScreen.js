import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Install with: npm install expo-linear-gradient

export default function TimeLogScreen({ navigation }) {
  // Sample state values for monthly hours and income
  const [monthlyHours, setMonthlyHours] = useState(34);
  const [monthlyIncome, setMonthlyIncome] = useState(537.2);
  const [currentMonthIndex, setCurrentMonthIndex] = useState(1);
  const monthLabels = ['Feb', 'Mar 1-Apr 1', 'Apr'];

  // Generate sample calendar days (1 to 30)
  const days = Array.from({ length: 30 }, (_, i) => i + 1);

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#2C2C2C', '#000']} style={styles.headerContainer}>
        <View style={styles.headerTopRow}>
          <Text style={styles.headerText}>Monthly Hours: {monthlyHours.toFixed(2)}</Text>
          <Text style={styles.headerText}>Monthly Income: {monthlyIncome.toFixed(2)}</Text>
          <TouchableOpacity style={styles.vipBtn}>
            <Text style={{ color: '#fff' }}>VIP</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.monthRow}>
          {monthLabels.map((label, index) => (
            <TouchableOpacity
              key={label}
              onPress={() => setCurrentMonthIndex(index)}
              style={[styles.monthBtn, currentMonthIndex === index && styles.monthBtnActive]}
            >
              <Text style={[styles.monthBtnText, currentMonthIndex === index && styles.monthBtnTextActive]}>
                {label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </LinearGradient>
      <FlatList
        data={days}
        keyExtractor={(item) => item.toString()}
        numColumns={4}
        style={styles.calendarList}
        renderItem={({ item }) => {
          // Sample random hours for each day
          const randomHours = (Math.random() * 5).toFixed(2);
          return (
            <TouchableOpacity
              style={styles.dayItem}
              onPress={() =>
                navigation.navigate('WorkDetail', { date: `2025-03-${String(item).padStart(2, '0')}` })
              }
            >
              <Text style={styles.dayNumber}>{item}</Text>
              <Text style={styles.dayHours}>{randomHours}h</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  headerContainer: {
    paddingTop: 40,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  headerTopRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    color: '#fff',
    fontSize: 16,
    marginRight: 8,
  },
  vipBtn: {
    borderWidth: 1,
    borderColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 6,
  },
  monthRow: {
    flexDirection: 'row',
    marginTop: 16,
    justifyContent: 'space-around',
  },
  monthBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  monthBtnActive: {
    backgroundColor: '#fff',
  },
  monthBtnText: {
    color: '#fff',
  },
  monthBtnTextActive: {
    color: '#000',
  },
  calendarList: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 8,
  },
  dayItem: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#333',
    margin: 4,
    borderRadius: 8,
    paddingVertical: 20,
    alignItems: 'center',
  },
  dayNumber: {
    color: '#fff',
    fontSize: 16,
  },
  dayHours: {
    color: '#f0a',
    marginTop: 4,
  },
});
