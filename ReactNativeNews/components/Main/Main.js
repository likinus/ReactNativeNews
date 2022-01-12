import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
  Modal,
  SafeAreaView,
} from 'react-native';

import rick1 from '../../../../ReactNativeNews/ReactNativeNews/assets/images/rick1.jpg';
import rick2 from '../../../../ReactNativeNews/ReactNativeNews/assets/images/rick2.jpeg';
import rick3 from '../../../../ReactNativeNews/ReactNativeNews/assets/images/rick3.jpeg';

import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlusCircle, faTimesCircle} from '@fortawesome/free-solid-svg-icons';

import {gStyles} from '../../styles/style';
import styles from './MainStyles';
import Form from '../Form';

const Main = ({navigation}) => {
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
  const [modalWindow, setModalWindow] = useState(false);
  console.log();

  const loadScene = item => () => {
    navigation.navigate('Contacts', item);
  };

  const modalHandler = () => {
    setModalWindow(!modalWindow);
  };

  const addArticle = article => {
    setNews(prevState => {
      article.key = Math.random().toString();
      return [article, ...prevState];
    });

    modalHandler();
  };

  return (
    <View style={gStyles.main}>
      <Modal visible={modalWindow}>
        <SafeAreaView style={gStyles.main}>
          <TouchableOpacity style={styles.touchable} onPress={modalHandler}>
            <FontAwesomeIcon
              size={34}
              color="red"
              icon={faTimesCircle}
              style={styles.iconClose}
            />
          </TouchableOpacity>
          <Text style={styles.title}>Add Form</Text>
          <Form addArticle={addArticle} />
        </SafeAreaView>
      </Modal>
      <TouchableOpacity style={styles.touchable} onPress={modalHandler}>
        <FontAwesomeIcon
          size={34}
          style={styles.iconAdd}
          color="green"
          icon={faPlusCircle}
        />
      </TouchableOpacity>
      <Text style={[gStyles.title, styles.header]}>Main Page</Text>
      <FlatList
        data={news}
        renderItem={({item}) => (
          <TouchableOpacity style={styles.item} onPress={loadScene(item)}>
            {typeof item.img === 'string' ? (
              <Image style={styles.image} source={{uri: item.img}} />
            ) : (
              <Image style={styles.image} source={item.img} />
            )}
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.anons}>{item.anons}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Main;
