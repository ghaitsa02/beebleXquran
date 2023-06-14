import {
  StyleSheet,
  Text,
  View,
  BackHandler,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

const Exit = () => {
  return (
    <View>
      <TouchableOpacity onPress={() => BackHandler.exitApp()}>
        <Text>Exit</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Exit;

const styles = StyleSheet.create({});
