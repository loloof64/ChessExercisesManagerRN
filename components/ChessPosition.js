import React from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainZone: {
    backgroundColor: '#cde',
  },
});

const defaultSize = 100;

function ChessPosition(props) {
  const {size} = props;
  const width = size || defaultSize;
  const height = size || defaultSize;
  const cellsSize = Math.floor(size / 9.0);

  const mainZoneDynamicStyle = {
    width,
    height,
  };

  const generateCells = () => {
    return [0, 1, 2, 3, 4, 5, 6, 7].map((row) => {
      return [0, 1, 2, 3, 4, 5, 6, 7].map((col) => {
        const key = 100 * row + col;
        const isWhiteCell = (row + col) % 2 == 0;
        const cellColor = isWhiteCell ? '#fda' : '#d94';
        const left = Math.floor(cellsSize * (0.5 + col));
        const top = Math.floor(cellsSize * (0.5 + row));
        const cellStyle = {
          left,
          top,
          position: 'absolute',
          backgroundColor: cellColor,
          width: cellsSize,
          height: cellsSize,
        };
        return <View style={cellStyle} key={key}></View>;
      });
    });
  };

  return (
    <View style={{...styles.mainZone, ...mainZoneDynamicStyle}}>
      {generateCells()}
    </View>
  );
}

export default ChessPosition;
