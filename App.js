import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import TimeLogScreen from './screens/TimeLogScreen';
import WorkDetailScreen from './screens/WorkDetailScreen';
import StatsScreen from './screens/StatsScreen';
import SettingsScreen from './screens/SettingsScreen';
import HourlyRateScreen from './screens/HourlyRateScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

//Wrap a layer of Stack to jump from TimeLogScreen to WorkDetailScreen
function TimeLogStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TimeLogMain" component={TimeLogScreen} />
      <Stack.Screen name="WorkDetail" component={WorkDetailScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="TimeLog"
        screenOptions={({ route }) => ({
          tabBarActiveTintColor: '#fff',
          tabBarInactiveTintColor: '#aaa',
          tabBarStyle: { backgroundColor: '#000' },
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName = 'home';
            if (route.name === 'TimeLog') iconName = 'calendar';
            if (route.name === 'Stats') iconName = 'stats-chart';
            if (route.name === 'Settings') iconName = 'settings';
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen
          name="TimeLog"
          component={TimeLogStack}
          options={{ title: 'Time Log' }}
        />
        <Tab.Screen
          name="Stats"
          component={StatsScreen}
          options={{ title: 'Stats' }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ title: 'Settings' }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
