import * as React from 'react';
import {View, useWindowDimensions, Text} from 'react-native';
import {TabView, SceneMap} from 'react-native-tab-view';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Juz from '../Juz';
import Surat from '../Surat';
import Isi from '../isi/Index';
import Kumpulan_juz from '../kumpulanJuz';
import Lanjut_Juz from '../lanjutJuz';

const Stack = createNativeStackNavigator();

const FirstRoute = () => {
  return (
    <View>
      <Text>ISI SURAT</Text>
    </View>
  );
};

const SecondRoute = () => {
  return (
    <View>
      <Text>ISI JUZ</Text>
    </View>
  );
};

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const TabViewExample = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'SURAT'},
    {key: 'second', title: 'JUZ'},
  ]);

  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width}}
    />
  );
};

export default TabViewExample;
