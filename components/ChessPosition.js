import React from 'react';
import { View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    mainZone: {
        backgroundColor: '#cde',
    }
});

const defaultSize = 100;

function ChessPosition(props) {

    const {size} = props;
    const width = size || defaultSize;
    const height = size || defaultSize;

    const mainZoneDynamic = {
        width, height
    };

    return (
        <View style={{...styles.mainZone, ...mainZoneDynamic}}>

        </View>
    );
}

export default ChessPosition;