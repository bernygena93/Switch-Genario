import React, {useState} from 'react';
import {View} from 'react-native';
import GameScreen from './src/screens/GameScreen';
import StartGame from './src/screens/StartGame';
import Header from './src/components/Header';

export default function App() {
  const [optionUser, setOptionUser] = useState();

  const handleSelectNumber = number => {
    setOptionUser(number);
  };

  const content = !optionUser ? (
    <StartGame title="Comenzar Juego" handleSelectNumber={handleSelectNumber} />
  ) : (
    <GameScreen optionUser={optionUser} setOptionUser={setOptionUser} />
  );

  return (
    <View>
      <Header title="Adivina el Numero" />
      {content}
    </View>
  );
}
