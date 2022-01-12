import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Main, Contacts} from '../components';

const Stack = createNativeStackNavigator();

const Navigate = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={Main}
          options={{
            title: 'Main Page',
            headerStyle: {backgroundColor: '#ed5d3d', height: 90},
            headerTitleStyle: {fontWeight: '300'},
          }}
        />
        <Stack.Screen
          name="Contacts"
          component={Contacts}
          options={{title: 'Contacts Page'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigate;
