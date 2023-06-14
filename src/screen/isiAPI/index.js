import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const IsiBib = ({route}) => {
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
      `https://beeble.vercel.app/api/v1/passage/Kej/1?ver=bis`,
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        console.log(result.data.verses);
        setData(result.data.verses.content);
      })
      .catch(error => console.log('error', error));
  };
  return (
    <ScrollView>
      <Text>{route.params.ayat}</Text>
    </ScrollView>
  );
};

export default IsiBib;

const styles = StyleSheet.create({});
