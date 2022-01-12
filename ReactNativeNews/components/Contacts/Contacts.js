import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './ContactsStyles';
import {gStyles} from '../../styles/style';

const Contacts = ({route}) => {
  return (
    <View style={gStyles.main}>
      <Image style={styles.image} source={route.params.img} />
      <Text style={gStyles.title}>{route.params.name}</Text>
      <Text style={styles.full}>{route.params.full}</Text>
    </View>
  );
};

export default Contacts;
