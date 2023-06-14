import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const Chapter3 = ({navigation}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getApi();
  }, []);

  const getApi = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://beeble.vercel.app/api/v1/passage/Kej/3?ver=bis`,
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        console.log(result.data.verses);
        setData(result.data.verses);
      })
      .catch(error => console.log('error', error));
  };

  return (
    <ScrollView>
      {data.map((item, index) => (
        <View
          style={{
            alignItems: 'center',
            backgroundColor: '#042030',
          }}>
          {/* <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.navigate('IsiBible', {
                ayat: item.content,
              })
            }></TouchableOpacity> */}
          <View
            style={{
              backgroundColor: '#8333f2',
              alignItems: 'center',
              width: 200,
              borderBottomEndRadius: 10,
              borderTopLeftRadius: 10,
            }}>
            <Text
              style={{
                fontSize: 25,
                fontFamily: 'Poppins-ExtraBold',
                color: '#000',
              }}>
              Ayat {item.verse}
            </Text>
          </View>
          <Text
            style={{
              fontSize: 20,
              fontFamily: 'Poppins-Bold',
              color: '#fff',
            }}>
            {item.content}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Chapter3;

const styles = StyleSheet.create({
  bksText: {
    borderBottomWidth: 5,
  },
});
