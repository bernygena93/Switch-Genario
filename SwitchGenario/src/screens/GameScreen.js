import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';
import NumberOptions from '../components/NumberOptions';
import OponentOption from '../components/OponentOption';
import {styles} from '../screens/styles/gameScreenStyle';
import {generateRandomBetween} from '../utils/functions/generateRandomBetween';

export default function GameScreen({optionUser, setOptionUser}) {
  const [equal, setEqual] = useState(false);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [number, setNumber] = useState(
    generateRandomBetween(min, max, optionUser),
  );

  useEffect(() => {
    if (parseInt(optionUser) === number) setEqual(true);
  }, [number]);

  const handleRateMin = () => {
    setMax(number);
    setNumber(generateRandomBetween(min, number, optionUser));
  };
  const handleRateMax = () => {
    setMin(number);
    setNumber(generateRandomBetween(number, max, optionUser));
  };

  return (
    <View style={styles.container}>
      <OponentOption number={number} title="La suposicion del oponente" />
      {equal ? (
        <View>
          <Text>La Computadora adivino tu numero</Text>
          <Text>Numero elegido por el Usuario: {optionUser}</Text>
          <Button
            title="INICIAR DE NUEVO"
            onPress={() => setOptionUser(false)}
          />
        </View>
      ) : (
        <NumberOptions
          handleRateMin={handleRateMin}
          handleRateMax={handleRateMax}
        />
      )}
    </View>
  );
}
