import {StyleSheet, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/Feather';
import React, {useState} from 'react';

const Problem = () => {
  const [search, setSearch] = useState(false);
  const [dataSearch, setDataSearch] = useState([]);
  return (
    <View style={{alignItems: 'center'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <View style={{position: 'absolute', marginLeft: 10}}>
          <Icon name="search" size={22} color="black" />
        </View>
        <TextInput
          placeholder="Surah apa ni, Yang ingin kamu cari ?"
          // onChangeText={val => Search(val)}
          style={{
            borderWidth: 1.7,
            width: '95%',
            height: 40,
            paddingLeft: 45,
            borderRadius: 10,
          }}
        />
      </View>
    </View>
  );
};

export default Problem;

const styles = StyleSheet.create({});
