import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {SvgXml} from 'react-native-svg';

import {Chess} from 'chess.js';

import WhitePawn from './chess_assets/Chess_plt45.svg';
import WhiteKnight from './chess_assets/Chess_nlt45.svg';
import WhiteBishop from './chess_assets/Chess_blt45.svg';
import WhiteRook from './chess_assets/Chess_rlt45.svg';
import WhiteQueen from './chess_assets/Chess_qlt45.svg';
import WhiteKing from './chess_assets/Chess_klt45.svg';
import BlackPawn from './chess_assets/Chess_pdt45.svg';
import BlackKnight from './chess_assets/Chess_ndt45.svg';
import BlackBishop from './chess_assets/Chess_bdt45.svg';
import BlackRook from './chess_assets/Chess_rdt45.svg';
import BlackQueen from './chess_assets/Chess_qdt45.svg';
import BlackKing from './chess_assets/Chess_kdt45.svg';


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

  const [position, setPosition] = useState(new Chess());

  const mainZoneDynamicStyle = {
    width,
    height,
  };

  const coordinatesToAlgebraic = (file, rank) => {
    const fileStr = String.fromCharCode("a".charCodeAt(0) + file);
    const rankStr = String.fromCharCode("1".charCodeAt(0) + rank);

    return fileStr + rankStr;
  }

  const getImageFromPieceFen = (pieceFen) => {
    const {type, color} = pieceFen || {};
    switch(type) {
      case 'p': return color === 'w' ? WhitePawn : BlackPawn;
      case 'n': return color === 'w' ? WhiteKnight : BlackKnight;
      case 'b': return color === 'w' ? WhiteBishop : BlackBishop;
      case 'r': return color === 'w' ? WhiteRook : BlackRook;
      case 'q': return color === 'w' ? WhiteQueen : BlackQueen;
      case 'k': return color === 'w' ? WhiteKing : BlackKing;
      default: return undefined;
    }
  }

  const generateCells = () => {
    return [0, 1, 2, 3, 4, 5, 6, 7].map((row) => {
      return [0, 1, 2, 3, 4, 5, 6, 7].map((col) => {
        const key = 100 * row + col;
        const isWhiteCell = (row + col) % 2 == 0;
        const cellColor = isWhiteCell ? '#fda' : '#d94';
        const left = Math.floor(cellsSize * (0.5 + col));
        const top = Math.floor(cellsSize * (0.5 + row));
        const pieceSize = cellsSize.toString();
        const cellStyle = {
          left,
          top,
          position: 'absolute',
          backgroundColor: cellColor,
          width: cellsSize,
          height: cellsSize,
        };

        const file = col;
        const rank = 7-row;
        const pieceFen = position.get(coordinatesToAlgebraic(file, rank));
        const pieceImage = getImageFromPieceFen(pieceFen);

        return (<View style={cellStyle} key={key}>
          {
            pieceImage && <SvgXml width={pieceSize} height={pieceSize} xml={pieceImage} />
          }
        </View>);
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
