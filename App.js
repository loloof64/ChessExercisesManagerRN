import React from 'react';
import {StyleSheet} from 'react-native';

import GamePage from './components/GamePage';

function App() {
  return <GamePage size={300} />;
}

const styles = StyleSheet.create({
  mainZone: {
    fontSize: 26,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});

export default App;
