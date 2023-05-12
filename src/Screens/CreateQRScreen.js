import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

function CreateQRScreen() {
  const [text, setText] = useState('');
  const [showQR, setShowQR] = useState(false);

  const handleGenerateQR = () => {
    setShowQR(true);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Enter text"
        value={text}
        onChangeText={(value) => setText(value)}
      />
      <TouchableOpacity style={styles.button} onPress={handleGenerateQR}>
        <Text style={styles.buttonText}>Generate QR</Text>
      </TouchableOpacity>
      {showQR && text !== '' && <QRCode value={text} size={200} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#4d94ff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    width: '80%',
    fontSize: 18,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4d94ff',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginBottom: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CreateQRScreen;
