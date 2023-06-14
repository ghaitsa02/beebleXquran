import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import React from 'react';

const Fitur = ({navigation}) => {
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: '#3863D8',
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={() => navigation.replace('Baca')}>
          <Icon name="left" color={'#000'} size={35} />
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 25,
            fontWeight: '700',
            color: '#000',
            marginLeft: 125,
          }}>
          BEEBLE
        </Text>
        {/* <Text
          style={{
            fontSize: 25,
            fontWeight: '700',
            color: '#000',
          }}>
          Mari login ke kristen dan anda akan mendapat bapak baru!
          ayo login
        </Text> */}
      </View>
      <View
        style={{
          alignItems: 'center',
          marginTop: 100,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#8333f2',
            width: 300,
            alignItems: 'center',
            margin: 10,
          }}
          onPress={() => navigation.navigate('Bible')}>
          <Text
            style={{
              fontSize: 25,
              fontFamily: 'Poppins-Bold',
              color: '#000',
            }}>
            Chapter 1
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#8333f2',
            width: 300,
            alignItems: 'center',
            margin: 10,
          }}
          onPress={() => navigation.navigate('Chapter2')}>
          <Text
            style={{
              fontSize: 25,
              fontFamily: 'Poppins-Bold',
              color: '#000',
            }}>
            Chapter 2
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: '#8333f2',
            width: 300,
            alignItems: 'center',
            margin: 10,
          }}
          onPress={() => navigation.navigate('Chapter3')}>
          <Text
            style={{
              fontSize: 25,
              fontFamily: 'Poppins-Bold',
              color: '#000',
            }}>
            Chapter 3
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Fitur;

const styles = StyleSheet.create({});
