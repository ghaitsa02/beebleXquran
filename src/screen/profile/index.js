import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SearchBar} from '@rneui/themed';

const Profile = () => {
  const [search, setSearch] = useState('');

  const updateSearch = search => {
    setSearch(search);
  };

  return (
    <View>
      <SearchBar
        style={styles.search}
        placeholder="Cari"
        onChangeText={updateSearch}
        value={search}
      />
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  search: {
    backgroundColor: '#fff',
    color: '#fff',
  },
});
