import {View, Text} from 'react-native';
import {Component} from 'react';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/AntDesign';
import Splash from '../screen/Splash';
import Home from '../screen/home';
import Isi from '../screen/isi/Index';
import Profile from '../screen/profile';
import TopTab from '../screen/topTabNavigator';
import Read from '../screen/Read';
import Kumpulan_juz from '../screen/kumpulanJuz';
import Lanjut_Juz from '../screen/lanjutJuz';
import Problem from '../screen/problem/Problem';
import About from '../screen/About/About';
import Juz from '../screen/Juz';
import TabViewExample from '../screen/tabView/Tabview';
import Surat from '../screen/Surat/index';
import Fitur from '../screen/newFitur/Fitur';
import Testing from '../screen/testAPI';
import IsiBib from '../screen/isiAPI';
import Chapter2 from '../screen/chapter/Chapter2';
import Chapter3 from '../screen/chapter/chapter3';

const Stack = createNativeStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
            tabBarIcon: ({color, size}) => (
              <Icon name="user" color={color} size={size} />
            ),
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen
          name="Surat"
          component={Surat}
          options={{
            headerShown: false,
          }}
        /> */}
        <Stack.Screen
          name="Isi"
          component={Isi}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Baca"
          component={Read}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Juz"
          component={Juz}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="kumpulanjuz"
          component={Kumpulan_juz}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="lanjutjuz"
          component={Lanjut_Juz}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen name="TopTab" component={TopTab} />
        <Stack.Screen
          name="Problem"
          component={Problem}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="tabView"
          component={TabViewExample}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Login"
          component={Fitur}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Bible"
          component={Testing}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="IsiBible"
          component={IsiBib}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Chapter2"
          component={Chapter2}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Chapter3"
          component={Chapter3}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
