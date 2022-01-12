import React, {useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';

import rick1 from '../../../../ReactNativeNews/ReactNativeNews/assets/images/rick1.jpg';
import rick2 from '../../../../ReactNativeNews/ReactNativeNews/assets/images/rick2.jpeg';
import rick3 from '../../../../ReactNativeNews/ReactNativeNews/assets/images/rick3.jpeg';

// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import {faCoffee} from '@fortawesome/free-solid-svg-icons';

import {gStyles} from '../../styles/style';
import styles from './MainStyles';

const Main = ({navigation}) => {
  console.log(rick1);
  const [news, setNews] = useState([
    {
      name: 'Google',
      anons: 'Google!!!',
      full: 'Google the best!!',
      key: '1',
      img: rick1,
    },
    {
      name: 'Apple',
      anons: 'Apple!!!',
      full: 'Apple the best!!',
      key: '2',
      img: rick2,
    },
    {
      name: 'Facebook',
      anons: 'Facebook!!!',
      full: 'Facebook the best!!',
      key: '3',
      img: rick3,
    },
  ]);

  const loadScene = item => () => {
    navigation.navigate('Contacts', item);
  };

  return (
    <View style={gStyles.main}>
      <Text style={[gStyles.title, styles.header]}>Main Page</Text>
      <FlatList
        data={news}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.item} onPress={loadScene(item)}>
            <Image style={styles.image} source={item.img} />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.anons}>{item.anons}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Main;
