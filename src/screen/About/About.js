import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

const About = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: '#8c81f0',
        flex: 1,
      }}>
      <View
        style={{
          width: 35,
          padding: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.replace('Home')}>
          <Icon name="arrow-back-ios" size={35} color={'#fff'} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color: '#000',
            fontSize: 20,
            fontFamily: 'Poppins-Medium',
          }}>
          Aplikasi ini dibuat dengan menggunakan bahasa pemerograman Javasript
          dengan Frameworknya yaitu React Native
        </Text>
      </View>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});
