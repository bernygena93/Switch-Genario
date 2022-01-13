import React from 'react';
import {View} from 'react-native';
import Button from './Button';
import {styles} from './styles/numberOptionsStyle';

export default function NumberOptions({handleRateMin, handleRateMax}) {
  return (
    <View style={styles.container}>
      <Button text="MENOR" style={styles.button} onPress={handleRateMin} />
      <Button text="MAYOR" style={styles.button2} onPress={handleRateMax} />
    </View>
  );
}
