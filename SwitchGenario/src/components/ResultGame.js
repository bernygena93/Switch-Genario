import React from 'react';
import {Image, Text, View} from 'react-native';
import {styles} from './styles/resultGameStyle';
const winImage = require('../assets/img/172-1725252_transparent-you-win-png-transparent-you-win-text.png');
const loseImage = require('../assets/img/game_over_PNG56.png');

export default function ResultGame({result}) {
  return (
    <View style={styles.container}>
      {result === 'win' ? (
        <View style={styles.results}>
          <Text style={styles.text}>Se cumplieron las 5 rondas</Text>
          <Image source={loseImage} style={styles.img} />
        </View>
      ) : (
        <View>
          <Text style={styles.text}>Adivinaron tu numero</Text>
          <Image source={loseImage} style={styles.img} />
        </View>
      )}
    </View>
  );
}
