import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';
import NumberOptions from '../components/NumberOptions';
import OponentOption from '../components/OponentOption';
import ResultGame from '../components/ResultGame';
import {styles} from '../screens/styles/gameScreenStyle';
import {generateRandomBetween} from '../utils/functions/generateRandomBetween';

export default function GameScreen({optionUser, setOptionUser}) {
  const [result, setResult] = useState('');
  const [rounds, setRounds] = useState(1);
  const [equal, setEqual] = useState(false);
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(100);
  const [number, setNumber] = useState(
    generateRandomBetween(min, max, optionUser),
  );

  useEffect(() => {
    if (parseInt(optionUser) === number) {
      setEqual(true);
      setResult('lose');
    }
    if (rounds === 5) {
      setResult('win');
    }
  }, [number]);

  const handleRateMin = () => {
    setMax(number);
    setNumber(generateRandomBetween(min, number, optionUser));
    setRounds(rounds => rounds + 1);
    console.warn(rounds);
  };
  const handleRateMax = () => {
    setMin(number);
    setNumber(generateRandomBetween(number, max, optionUser));
    setRounds(rounds => rounds + 1);
    console.warn(rounds);
  };

  return (
    <View style={styles.container}>
      <OponentOption number={number} title="La suposicion del oponente" />
      {result !== '' ? (
        <View style={styles.container}>
          <ResultGame result={result} />
          <Text style={styles.text}>
            el numero que elegiste fue: {optionUser}
          </Text>
          <Button
            title="INICIAR DE NUEVO"
            color="#f72585"
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
