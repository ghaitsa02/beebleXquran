import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import AnimatedLottieView from 'lottie-react-native';
import React from 'react';
import {useState, useEffect} from 'react';
import {SearchBar} from '@rneui/themed';
import Icon from 'react-native-vector-icons/FontAwesome';
import InternetConnectionAlert from 'react-native-internet-connection-alert';
import Sound from 'react-native-sound';
import Icon2 from 'react-native-vector-icons/Ionicons';

const Isi = ({navigation, route}) => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const [kondisi, setKondisi] = useState(true);
  const [audioData, setAudioData] = useState();
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    getSurat();
  }, []);

  const getSurat = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      `https://equran.id/api/surat/${route.params.nomor_surah}`,
      requestOptions,
    )
      .then(response => response.json())
      .then(result => {
        console.log('Data Quran', result);
        setData(result.ayat);
        setAudioData(result.audio);
        setKondisi(false);
      })
      .catch(error => console.log('error', error));
  };

  Sound.setCategory('Playback');
  const audio = new Sound(`${audioData}`, null, error => {
    if (error) {
      console.log('gabisa di putar', error);
      return;
    }
    //if loaded succsesfully
    console.log(
      'duration in second : ' +
        audio.getDuration() +
        'number of channel :' +
        audio.getNumberOfChannels(),
    );
  });

  const PlayRemoteURLSoundFile = () => {
    if (audio.isPlaying()) {
      audio.pause();
      // setPlaying(true);
    } else {
      // setPlaying(false);
      audio.play(success => {
        if (success) {
          // setPlaying(true);
          console.log('successfully finished playing');
        } else {
          setPlaying(true);
          console.log('playback failed due to audio decoding errors');
        }
      });
    }
  };

  return kondisi ? (
    <InternetConnectionAlert
      onChange={connectionState => {
        if (connectionState.isConnected == true) {
          getSurat();
          console.log('get isi');
        } else if (connectionState.isConnected == false) {
          console.log('false');
        }
      }}
      title="Tidak ada koneksi internet"
      message="Harap isi kuota internet anda terlebih dahulu...">
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          backgroundColor: '#fff',
          alignItems: 'center',
        }}>
        <AnimatedLottieView
          source={require('../../assets/lottie/Loading process.json')}
          loop={true}
          autoPlay={true}
          style={{width: 400, height: 250}}
        />
        <Text
          style={{
            position: 'absolute',
            top: '62%',
            fontSize: 25,
            fontWeight: '700',
            color: '#000',
          }}>
          Mohon Bersabar...
        </Text>
        {/* <Text
          style={{
            position: 'absolute',
            top: '62%',
            fontSize: 25,
            fontWeight: '700',
            color: '#000',
            marginTop: 30,
          }}>
          Orang sabar disayang Jesus
        </Text> */}
      </View>
    </InternetConnectionAlert>
  ) : (
    <ScrollView style={styles.container}>
      <View
        style={{
          padding: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          onPress={() => {
            audio.stop();
            navigation.replace('Baca', {
              routeName: 'Home',
            });
          }}>
          <Icon name="arrow-left" size={35} color={'grey'} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon2
            name="md-play-circle-outline"
            size={35}
            color={'#fff'}
            onPress={() => PlayRemoteURLSoundFile()}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.conterImg}>
        <Image
          source={require('../../assets/images/bismilah.png')}
          style={styles.img}
        />
      </View>
      <View style={styles.bks}>
        {data.map((item, index) => {
          return (
            <View style={styles.bks2} key={index}>
              <Text style={styles.ayat1}>{item.ar}</Text>
              <Text style={styles.ayat}>{item.idn}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Isi;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#042030',
  },
  conterImg: {
    alignItems: 'center',
  },
  img: {
    marginTop: 20,
  },
  bks: {
    flexDirection: 'column',
    marginTop: 20,
  },
  bks2: {
    paddingBottom: 10,
  },
  ayat1: {
    color: '#fff',
    fontSize: 30,
    padding: 5,
  },
  ayat: {
    marginBottom: 30,
    color: '#fff',
    fontSize: 20,
    borderBottomWidth: 1,
    padding: 5,
  },
});
