import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import Button from './Button';
import {styles} from './styles/numberCardStyle';

export default function NumberCard({title, handleSelect}) {
  const [number, setNumber] = useState(0);
  const handleChange = text => {
    setNumber(text);
  };

  const handlePress = number => {
    handleSelect(number);
    setNumber();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          onChangeText={text => handleChange(text)}
        />
      </View>
      <View style={styles.options}>
        <Button
          text="LIMPIAR"
          style={styles.button}
          onPress={() => handleChange()}
        />
        <Button
          text="CONFIRMAR"
          style={styles.button2}
          onPress={() => handlePress(number)}
        />
      </View>
    </View>
  );
}
