// @generated: @expo/next-adapter@2.1.52
import 'react-native-gesture-handler';
import React from 'react';
import { Button, StyleSheet, Text, View, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './home';
import RepScreen from './representatives'
import ElectionScreen from './elections'
import PollScreen from './polling'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createMaterialBottomTabNavigator();
export default function App() {
  return (

  <NavigationContainer>
    <Tab.Navigator
    initialRouteName="Home" 
    >
      <Tab.Screen name="Home"
       component={HomeScreen} 
       options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={26} />
        ),
      }}
       />
      <Tab.Screen name="Representatives"
       component={RepScreen}
       options={{
        tabBarLabel: 'Representatives',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account-group" color={color} size={26} />
        ),
      }}
        />
      <Tab.Screen name="Polling"
       component={PollScreen}
       options={{
        tabBarLabel: 'Polls',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="map-marker" color={color} size={26} />
        ),
      }}
        />
      <Tab.Screen name="Election"
       component={ElectionScreen}
       options={{
        tabBarLabel: 'Elections',
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="archive-arrow-up" color={color} size={26} />
        ),
      }}
        />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});
