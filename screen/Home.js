import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image source={require('../image/logo.png')} style={styles.logo}></Image>
      <View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('details')}>
          <Text style={styles.btnText}>Create Invoice</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  btn: {
    backgroundColor: 'green',

    margin: 10,
    borderRadius: 5,
    
  },
  btnText:{
    fontSize:20,
    fontWeight:"bold",
   
  }
});
