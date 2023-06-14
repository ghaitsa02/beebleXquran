import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import {SearchBar} from '@rneui/base';

const Splash = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <View style={styles.BksText}>
        <Text style={styles.Quran}>My Qur'an</Text>
        <View style={styles.BksText2}>
          <Text style={styles.Learn}>Learn Quran and</Text>
          <Text style={styles.Learn}>Recite once everyday</Text>
        </View>
      </View>
      <Image source={require('../../assets/images/Quran.png')} />
      <TouchableOpacity
        style={styles.Tombol}
        onPress={() => navigation.replace('Baca')}>
        <Text style={styles.Start}>Get Started</Text>
      </TouchableOpacity>
      {/* <Text style={styles.Quran} onPress={() => navigation.navigate('TopTab')}>
        Pindah
      </Text> */}
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  Container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#042030',
  },
  BksText: {
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 86,
  },
  Quran: {
    color: '#fff',
    fontFamily: 'Poppins-Bold',
    fontSize: 28,
  },
  BksText2: {
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 19.5,
  },
  Learn: {
    color: '#7B80AD',
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
  },
  Tombol: {
    backgroundColor: '#F9B091',
    width: 185,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    bottom: 25,
  },
  Start: {
    color: '#091945',
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
  },
});
