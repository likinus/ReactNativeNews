import React from 'react';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import MainStack from './Navigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <MainStack />
    </SafeAreaProvider>
  );
};

export default App;
