import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:20 ,marginVertical:20}} >Create or Scan QR Code easily</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('CreateQR')}
      >
        <Text style={styles.buttonText}>Create QR</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#4d94ff' }]}
        onPress={() => navigation.navigate('ScanQR')}
      >
        <Text style={styles.buttonText}>Scan QR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 30,
    paddingHorizontal: 60,
    borderRadius: 20,
    backgroundColor: '#ff4d4d',
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
