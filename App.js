import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { RootNavigator } from './src/navigation';

export default App = () => {
  return (
    <>
      <SafeAreaView />
      <SafeAreaView style={{ flex: 1, backgroundColor: '#3F25E5' }}>
        <RootNavigator />
      </SafeAreaView>
    </>
  );
};
