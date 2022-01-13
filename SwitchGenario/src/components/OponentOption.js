import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles/oponentOptionsStyle';

export default function OponentOption({title, number}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <Text style={styles.number}>{number}</Text>
    </View>
  );
}
