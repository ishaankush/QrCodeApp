import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import HomeScreen from '../Screens/HomeScreen';
import CreateQRScreen from '../Screens/CreateQRScreen';
import ScanQRScreen from '../Screens/ScanQRScreen';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen}  options={{
            title: "Quick QR",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: '#ff4d4d',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }} />
      <Stack.Screen name="CreateQR" component={CreateQRScreen} options={{
            title: "Create QR",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: '#ff4d4d',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>
      <Stack.Screen name="ScanQR" component={ScanQRScreen} options={{
            title: "Scan QR",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: '#ff4d4d',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}/>
    </Stack.Navigator>
  );
}

export default Routes;