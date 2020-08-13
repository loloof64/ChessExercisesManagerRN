import React, {useState, useContext, useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import {Appbar, Snackbar} from 'react-native-paper';
import {NavigationContext} from '@react-navigation/native';
import pgnParser from '@mliebelt/pgn-parser';
import RNFS from 'react-native-fs';
import axios from 'axios';

import ChessPosition from '../components/ChessPosition';

const styles = StyleSheet.create({
  appBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#ac76ef',
  },
  mainZone: {
    backgroundColor: '#dcfe86',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 15,
  },
});

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const minimumWindowSize = Math.min(windowWidth, windowHeight);
const boardSize = Math.floor(minimumWindowSize * 0.9);

function GamePage() {
  const navContext = useContext(NavigationContext);

  const [boardReversed, setBoardReversed] = useState(false);
  const [snackBarVisible, setSnackBarVisible] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState('');

  const showSnackBar = (message) => {
    setSnackBarMessage(message);
    setSnackBarVisible(true);
  };

  const connectToOneDrive = () => {
    navContext.navigate('AuthStack');
  }

  const reverseBoard = () => {
    setBoardReversed((oldState) => !oldState);
  };

  return (
    <>
      <View style={styles.mainZone}>
        <ChessPosition size={boardSize} reversed={boardReversed} />
      </View>

      <Appbar style={styles.appBar}>
        <Appbar.Action icon="arrow-up-down-bold" onPress={reverseBoard} />
        <Appbar.Action icon="cloud" onPress={connectToOneDrive} />
      </Appbar>

      <Snackbar
        visible={snackBarVisible}
        duration={Snackbar.DURATION_MEDIUM}
        onDismiss={() => setSnackBarVisible(false)}>
        {snackBarMessage}
      </Snackbar>
    </>
  );
}

export default GamePage;
