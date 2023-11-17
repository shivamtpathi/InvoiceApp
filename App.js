import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Navigation from './navigation/Navigation';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Navigation />
    </SafeAreaView>
  );
};

export default App;
