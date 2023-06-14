import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import Icon2 from 'react-native-vector-icons/AntDesign';
import User from '../user';
import Cart from '../cart';
import Profile from '../profile';

const Tab = createMaterialTopTabNavigator();

const TopTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="User"
          component={User}
          options={{
            tabBarIcon: ({color, size}) => {
              <Icon2 name="user" color={color} size={size} />;
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({color, size}) => {
              <Icon2 name="profile" color={color} size={size} />;
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TopTab;
