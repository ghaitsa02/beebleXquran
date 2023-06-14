import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Home from './home';
import Juz from './Juz';

const Tab = createMaterialTopTabNavigator();

// const Tab = createBottomTabNavigator();

const Read = () => {
  return (
    <Tab.Navigator
      style={{
        backgroundColor: '#042030',
      }}>
      <Tab.Screen
        name="surah"
        component={Home}
        options={{
          tabBarLabel: 'Surat',
          tabBarColor: '#042030',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="juz"
        component={Juz}
        options={{
          tabBarLabel: 'Juz',
          tabBarColor: '#042030',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Read;

const styles = StyleSheet.create({});
