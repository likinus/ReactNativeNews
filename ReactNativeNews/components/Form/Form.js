import React from 'react';
import {View, Button, TextInput} from 'react-native';
import {Formik} from 'formik';
import styles from './FormStyles';
import {gStyles} from '../../styles/style';

const Form = ({addArticle}) => {
  const submit = (values, action) => {
    addArticle(values);
    action.resetForm();
  };

  return (
    <View style={gStyles.main}>
      <Formik
        initialValues={{
          name: '',
          anons: '',
          full: '',
          img: '',
        }}
        onSubmit={submit}>
        {props => (
          <View>
            <TextInput
              style={styles.input}
              value={props.values.name}
              placeholder={'Enter name'}
              onChangeText={props.handleChange('name')}
            />
            <TextInput
              style={styles.input}
              value={props.values.anons}
              multiline
              placeholder={'Enter anons'}
              onChangeText={props.handleChange('anons')}
            />
            <TextInput
              style={styles.input}
              value={props.values.full}
              multiline
              placeholder={'Enter full'}
              onChangeText={props.handleChange('full')}
            />
            <TextInput
              style={styles.input}
              value={props.values.img}
              placeholder={'Enter photo'}
              onChangeText={props.handleChange('img')}
            />
            <Button title="Add" onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Form;
