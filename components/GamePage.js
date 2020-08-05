import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

import ChessPosition from './ChessPosition';

const styles = StyleSheet.create({
    mainZone: {
        backgroundColor: '#dcfe86',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const minimumWindowSize = Math.min(windowWidth, windowHeight);
const boardSize = Math.floor(minimumWindowSize * 0.9);


function GamePage() {
    return (
        <View style={styles.mainZone}>
            <ChessPosition size={boardSize} />
        </View>
    );
}

export default GamePage;