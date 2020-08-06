import React, {useState} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Appbar} from 'react-native-paper';

import ChessPosition from './ChessPosition';

const styles = StyleSheet.create({
  appBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  mainZone: {
    backgroundColor: '#dcfe86',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const minimumWindowSize = Math.min(windowWidth, windowHeight);
const boardSize = Math.floor(minimumWindowSize * 0.9);

function GamePage() {
  const [boardReversed, setBoardReversed] = useState(false);

  const reverseBoard = () => {
    setBoardReversed(oldState => !oldState);
  };

  return (
    <>
      <View style={styles.mainZone}>
        <ChessPosition size={boardSize} reversed={boardReversed} />
      </View>

      <Appbar style={styles.appBar}>
        <Appbar.Content title="Game page" />
        <Appbar.Action
          icon="arrow-up-down-bold"
          onPress={reverseBoard}
        />
      </Appbar>
    </>
  );
}

export default GamePage;
