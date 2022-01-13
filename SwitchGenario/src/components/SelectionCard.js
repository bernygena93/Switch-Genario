import React from 'react';
import {Button, Text, View} from 'react-native';
import {styles} from './styles/selectCardStyle';

export default function SelectionCard({title, number, handleSelectNumber}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.number}>{number ? number : '-'}</Text>
      <Button
        title="EMPEZAR EL JUEGO"
        color="#3A0CA3"
        onPress={() => handleSelectNumber(number)}
      />
    </View>
  );
}
