import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

function CreateQRScreen() {
  const [text, setText] = useState('');
  const [showQR, setShowQR] = useState(false);

  const handleGenerateQR = () => {
    setShowQR(true);
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        style={{ borderWidth: 1, padding: 10, marginBottom: 20, width: 200 }}
        placeholder="Enter text"
        value={text}
        onChangeText={(value) => setText(value)}
      />
      <Button title="Generate QR" onPress={handleGenerateQR} />
      {showQR && text !== '' && <QRCode value={text} size={200} />}
    </View>
  );
}

export default CreateQRScreen;
