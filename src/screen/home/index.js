import {
  DrawerLayoutAndroid,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  Linking,
  Alert,
  ImageBackground,
  useWindowDimensions,
  BackHandler,
  LogBox,
  useColorScheme,
} from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon3 from 'react-native-vector-icons/AntDesign';
import Icon4 from 'react-native-vector-icons/FontAwesome5';
import {SearchBar} from '@rneui/themed';
import AnimatedLottieView from 'lottie-react-native';
import InternetConnectionAlert from 'react-native-internet-connection-alert';
import {SceneMap, TabView} from 'react-native-tab-view';
import Juz from '../Juz';

LogBox.ignoreAllLogs();

const Home = ({navigation}) => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('left');
  const [data, setData] = useState([]);
  const [kondisi, setKondisi] = useState(true);
  const [kondisi2, setKondisi2] = useState();
  const [search, setSearch] = useState(false);
  const [dataSearch, setDataSearch] = useState([]);
  const colorScheme = useColorScheme();

  const Search = text => {
    if (text) {
      const newData = dataSearch.filter(item => {
        const itemData = item.nama_latin
          ? item.nama_latin.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setData(newData);

      console.log('Filter', data);
    } else {
      setData(dataSearch);
    }
  };

  useEffect(() => {
    getApi();
  }, []);

  const getApi = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch('https://equran.id/api/surat', requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log('Data Quran', result);
        setData(result);
        setDataSearch(result);
        setKondisi(false);
      })
      .catch(error => console.log('error coy', error));
  };

  const url1 = `https://wa.me/62895622733040`;
  const url2 = `https://facebook.com`;

  const navigationView = () => {
    const reportWa = () => {
      Linking.openURL(url1)
        .then(() => {
          console.log('sukses');
        })
        .catch(() => {
          console.log('error');
        });
    };

    return (
      <View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            height: 200,
          }}>
          <ImageBackground
            source={require('../../assets/images/Quran.png')}
            style={{
              width: 300,
              height: 325,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 40,
                fontFamily: 'Poppins-ExtraBold',
                marginTop: 275,
              }}
              onPress={() => alertLogin()}>
              MY QUR'AN
            </Text>
          </ImageBackground>
        </View>
        <View
          style={{
            width: '85%',
            marginLeft: 22.5,
          }}>
          <TouchableOpacity
            onPress={() => {
              reportWa('');
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#8333f2',
              marginTop: 140,
              borderRadius: 15,
              height: 65,
            }}>
            <Icon3 name="customerservice" size={45} color={'#000'} />
            <Text
              style={{
                color: '#000',
                fontSize: 15,
                fontFamily: 'Poppins-ExtraBold',
                margin: 10,
              }}>
              REPORT A PROBLEM
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '85%',
            marginLeft: 22.5,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('About')}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#8333f2',
              marginTop: 50,
              borderRadius: 15,
              height: 65,
            }}>
            <Icon4 name="quran" size={45} color={'#000'} />
            <Text
              style={{
                color: '#000',
                fontSize: 15,
                fontFamily: 'Poppins-ExtraBold',
                margin: 10,
              }}>
              ABOUT APLICATION
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => drawer.current.closeDrawer()}
          style={{
            alignItems: 'center',
            marginTop: 90,
            marginLeft: 175,
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontFamily: 'Poppins-Bold',
              color: '#000',
              fontSize: 40,
              marginTop: 25,
            }}>
            Exit
          </Text>
          <Icon3 name="arrowright" size={35} color={'#000'} />
        </TouchableOpacity>
      </View>
    );
  };

  const updateSearch = search => {
    setSearch(search);
  };

  const alertOut = () => {
    Alert.alert('Keluar', 'Yakin bacanya hari ini sudah satu juz?', [
      {
        text: 'Belum',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'Sudah', onPress: () => BackHandler.exitApp()},
    ]);
    return true;
  };

  const alertLogin = () => {
    Alert.alert('Login', 'Apakah anda ingin login?', [
      {
        text: 'TIDAK',
        onPress: () => null,
        style: 'cancel',
      },
      {text: 'YA', onPress: () => navigation.replace('Login')},
    ]);
    return true;
  };

  return kondisi ? (
    <InternetConnectionAlert
      onChange={connectionState => {
        if (connectionState.isConnected == true) {
          getApi();
          console.log('get Surah');
        } else if (connectionState.isConnected == false) {
          console.log('false');
        }
      }}
      title="Tidak ada koneksi internet"
      message="Harap isi kuota internet anda terlebih dahulu...">
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flex: 1,
        }}>
        <AnimatedLottieView
          source={require('../../assets/lottie/bufer.json')}
          loop={true}
          autoPlay={true}
          style={{width: 400, height: 400}}
        />
        <Text
          style={{
            position: 'absolute',
            top: 550,
            fontSize: 25,
            fontWeight: '700',
            color: '#000',
          }}>
          Mohon Bersabar...
        </Text>
      </View>
    </InternetConnectionAlert>
  ) : (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerBackgroundColor={'#24dbf0'}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}
      style={styles.container}>
      <View>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <TouchableOpacity onPress={() => drawer.current.openDrawer()}>
            <Icon name="list" size={50} color={'#fff'} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => alertOut()}
            style={{
              flexDirection: 'row',
              // backgroundColor: '#A44AFF',
              // borderBottomLeftRadius: 10,
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 30,
                fontFamily: 'Poppins-Bold',
                bottom: 7,
              }}>
              EXIT
            </Text>
            <Icon2 name="exit-to-app" size={40} color={'#fff'} />
          </TouchableOpacity>
        </View>
        <View style={styles.gbr}>
          <Text style={styles.ayat1}>My Qur'an</Text>
        </View>
        <TouchableOpacity onPress={() => setSearch(!search)}>
          <Icon name="search" size={40} color={'#fff'} />
        </TouchableOpacity>
        {search ? (
          <SearchBar
            style={styles.search}
            placeholder="Search"
            onChangeText={val => Search(val)}
            value={search}
          />
        ) : (
          <></>
        )}
      </View>
      <ScrollView>
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.replace('Isi', {
                nomor_surah: item.nomor,
              })
            }
            style={styles.bksText}>
            <View style={styles.bksSemua}>
              <View style={styles.bks}>
                <Text style={styles.nmr}>{item.nomor}</Text>
                <Icon name="octagon" color={'#A44AFF'} size={51} />
              </View>
              <View style={styles.bksKet}>
                <Text style={styles.surat}>{item.nama_latin}</Text>
                <View style={styles.bksAyat}>
                  <Text style={styles.jAyat}>{item.jumlah_ayat} Ayat</Text>
                  <Text style={styles.jAyat}>-</Text>
                  <Text style={styles.jAyat}>{item.tempat_turun}</Text>
                </View>
              </View>
            </View>
            <Text style={styles.ayat}>{item.nama}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </DrawerLayoutAndroid>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#042030',
    flex: 1,
  },
  search: {
    backgroundColor: '#fff',
    color: useColorScheme == 'dark' ? 'white' : 'black',
  },
  gbr: {
    alignItems: 'center',
    borderWidth: 2.5,
    borderColor: '#A44AFF',
  },
  img: {
    marginTop: 20,
  },

  ayat1: {
    fontSize: 35,
    fontFamily: 'Poppins-Bold',
    color: '#fff',
  },
  bksText: {
    borderBottomWidth: 5,
  },
  bksSemua: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  bks: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  nmr: {
    color: '#fff',
    fontFamily: 'Poppins-Medium',
    fontSize: 15,
    top: 38.5,
  },
  bksKet: {
    padding: 5,
    justifyContent: 'center',
    top: 7.5,
  },
  bksAyat: {
    flexDirection: 'row',
  },
  surat: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#fff',
    padding: 5,
  },
  jAyat: {
    fontFamily: 'Poppins-Normal',
    fontSize: 12,
    color: '#7B80AD',
  },
  ayat: {
    color: '#A44AFF',
    fontSize: 25,
    padding: 5,
  },
});
