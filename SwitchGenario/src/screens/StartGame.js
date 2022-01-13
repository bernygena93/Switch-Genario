import React, {useState} from 'react';
import {Text, View} from 'react-native';
import NumberCard from '../components/NumberCard';
import SelectionCard from '../components/SelectionCard';
import {styles} from './styles/startGameStyle';

export default function StartGame({title, handleSelectNumber}) {
  const [number, setNumber] = useState(0);

  const handleSelect = number => {
    setNumber(number);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <NumberCard title="Elija un número" handleSelect={handleSelect} />
      <SelectionCard
        title="Tu Seleccion"
        number={number}
        handleSelectNumber={handleSelectNumber}
      />
    </View>
  );
}
