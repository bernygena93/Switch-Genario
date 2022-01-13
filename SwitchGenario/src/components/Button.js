import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './styles/buttonStyle';

export default function Button({text, style, onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, style]}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
