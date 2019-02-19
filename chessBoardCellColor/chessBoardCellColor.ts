function chessBoardCellColor(cell1, cell2) {
  debugger;
  const chars = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
  const cell11 = (chars.indexOf(cell1.charAt(0)) + 1) % 2;
  const cell12 = parseInt(cell1.charAt(1)) % 2;
  const cell21 = (chars.indexOf(cell2.charAt(0)) + 1) % 2;
  const cell22 = parseInt(cell2.charAt(1)) % 2;
  if (getCellColor(cell11, cell12) === getCellColor(cell21, cell22)) {
    return true;
  } else {
    return false;
  }
}

function getCellColor(first, second) {
  if (first === second) {
    return 'black';
  } else {
    return 'white';
  }
}

console.log(chessBoardCellColor('A1', 'C3'));
console.log(chessBoardCellColor('A1', 'H3'));
console.log(chessBoardCellColor('A1', 'B1'));
console.log(chessBoardCellColor('D3', 'H1'));
