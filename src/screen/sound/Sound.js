import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Sound from 'react-native-sound';

const SoundApp = () => {
  const [sound, setSound] = useState(null);
  const play = () => {
    let summer = new Sound('summer.mp3', Sound.MAIN_BUNDLE, err => {
      if (err) {
        console.log('Raiso', err);
        return;
      }
      summer.play(succses => {
        console.log('end', succses);
      });
    });
    setSound(summer);
  };

  return (
    <View>
      <Button
        title="Click"
        onPress={() => {
          play();
        }}
      />
      <Text>SoundApp</Text>
    </View>
  );
};

export default SoundApp;

const styles = StyleSheet.create({});
