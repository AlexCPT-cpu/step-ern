import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

const WalkScreen = () => {
  const [weeklyTargetInput, setWeeklyTargetInput] = useState('');
  const [data, setData] = useState({
    heartRate: 75, // bpm
    kilometersWalked: 5.2,
    dailyGoal: '10 km',
    dailyGoalAchieved: false,
    totalTimeWalked: '45 minutes',
    weeklyTarget: '35 km',
  });

  const handleSetWeeklyTarget = () => {
    setData({ ...data, weeklyTarget: weeklyTargetInput });
    setWeeklyTargetInput(''); // Clear the input after setting the target
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.metricBox}>
          <FontAwesome5 name="walking" size={30} color="#4caf50" />
          <Text style={styles.metricText}>{data.kilometersWalked} km</Text>
          <Text style={styles.label}>Kilometers Walked</Text>
        </View>

        <View style={styles.metricBox}>
          <FontAwesome5 name="heart" size={30} color="#f44336" />
          <Text style={styles.metricText}>{data.heartRate} bpm</Text>
          <Text style={styles.label}>Heart Rate</Text>
        </View>

        <View style={styles.metricBox}>
          <FontAwesome5 name="clock" size={30} color="#ffeb3b" />
          <Text style={styles.metricText}>{data.totalTimeWalked}</Text>
          <Text style={styles.label}>Total Time Walked</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Set weekly target (km)"
            placeholderTextColor="#a1a1aa"
            value={weeklyTargetInput}
            onChangeText={setWeeklyTargetInput}
            keyboardType="numeric"
          />
          <TouchableOpacity onPress={handleSetWeeklyTarget} style={styles.button}>
            <Text style={styles.buttonText}>Set Target</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.metricBox}>
          <MaterialCommunityIcons name="target" size={30} color="#2196f3" />
          <Text style={styles.metricText}>{data.weeklyTarget}</Text>
          <Text style={styles.label}>Weekly Target</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0d1117',
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  metricBox: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#1c1e24',
  },
  metricText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  label: {
    color: '#a1a1aa',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginRight: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    backgroundColor: '#22272e',
    color: 'white',
  },
  button: {
    backgroundColor: '#238636',
    borderRadius: 10,
    padding: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default WalkScreen;
