// import { StyleSheet, Text, View } from 'react-native'
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screen/Home';
import Detail from '../screen/Detail';
const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown:false}}
         
        />
        <Stack.Screen name="details" component={Detail} 
         options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Navigation

// const styles = StyleSheet.create({})