import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';

const SHIFT_OPTIONS = ['Day Shift', 'Night Shift', 'Off', 'Late Shift', 'Early Shift'];

export default function WorkDetailScreen({ route, navigation }) {
  const { date } = route.params || {};
  const [shift, setShift] = useState(SHIFT_OPTIONS[0]);
  const [hours, setHours] = useState('0');
  const [minutes, setMinutes] = useState('0');
  const [note, setNote] = useState('');

  const handleSave = () => {
    // Save data logic here (e.g., using AsyncStorage)
    navigation.goBack();
  };

  // Custom numeric keypad handling
  const handleKeyPress = (digit, type) => {
    if (type === 'hours') {
      if (digit === 'DEL') {
        setHours(hours.slice(0, -1) || '0');
      } else {
        if (hours === '0') setHours(digit);
        else setHours(hours + digit);
      }
    } else {
      if (digit === 'DEL') {
        setMinutes(minutes.slice(0, -1) || '0');
      } else {
        if (minutes === '0') setMinutes(digit);
        else setMinutes(minutes + digit);
      }
    }
  };

  const renderKey = (label, type) => (
    <TouchableOpacity key={label} style={styles.keyBtn} onPress={() => handleKeyPress(label, type)}>
      <Text style={styles.keyText}>{label}</Text>
    </TouchableOpacity>
  );

  const keypadDigits = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'DEL'];

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.dateText}>{date}</Text>

      {/* Shift selection */}
      <View style={styles.shiftRow}>
        {SHIFT_OPTIONS.map((s) => (
          <TouchableOpacity
            key={s}
            style={[styles.shiftBtn, shift === s && { backgroundColor: '#f0a' }]}
            onPress={() => setShift(s)}
          >
            <Text style={[styles.shiftBtnText, shift === s && { color: '#fff' }]}>{s}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Hours and Minutes Input */}
      <View style={styles.hmRow}>
        <View style={styles.hmItem}>
          <Text style={styles.hmLabel}>Hours (h)</Text>
          <Text style={styles.hmValue}>{hours}</Text>
          <View style={styles.keypad}>
            {keypadDigits.map((d) => renderKey(d, 'hours'))}
          </View>
        </View>
        <View style={styles.hmItem}>
          <Text style={styles.hmLabel}>Minutes (m)</Text>
          <Text style={styles.hmValue}>{minutes}</Text>
          <View style={styles.keypad}>
            {keypadDigits.map((d) => renderKey(d, 'minutes'))}
          </View>
        </View>
      </View>

      {/* Note input */}
      <TextInput
        style={styles.noteInput}
        placeholder="Add a note (max 200 chars)"
        placeholderTextColor="#666"
        value={note}
        onChangeText={setNote}
        multiline
      />

      <TouchableOpacity style={styles.saveBtn} onPress={handleSave}>
        <Text style={styles.saveBtnText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
    padding: 16,
  },
  dateText: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 12,
  },
  shiftRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 16,
  },
  shiftBtn: {
    borderWidth: 1,
    borderColor: '#f0a',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    marginRight: 8,
    marginBottom: 8,
  },
  shiftBtnText: {
    color: '#f0a',
  },
  hmRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  hmItem: {
    width: '48%',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  hmLabel: {
    color: '#999',
    marginBottom: 8,
  },
  hmValue: {
    color: '#fff',
    fontSize: 24,
    marginBottom: 8,
  },
  keypad: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  keyBtn: {
    width: '30%',
    margin: '1.66%',
    borderWidth: 1,
    borderColor: '#666',
    borderRadius: 4,
    padding: 10,
    alignItems: 'center',
  },
  keyText: {
    color: '#fff',
    fontSize: 16,
  },
  noteInput: {
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 6,
    color: '#fff',
    padding: 10,
    marginBottom: 20,
  },
  saveBtn: {
    backgroundColor: '#f0a',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  saveBtnText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
