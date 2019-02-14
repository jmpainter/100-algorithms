function bishopAndPawn(bishop, pawn) {
  const bishopX = letterToNumber(bishop.charAt(0));
  const bishopY = Number(bishop.charAt(1));
  const bishopMoves = [];
  // // get upper right moves
  let currX = bishopX;
  let currY = bishopY;
  while (currX < 8 && currY < 8) {
    currX++;
    currY++;
    bishopMoves.push(numberToLetter(currX) + currY.toString());
  }
  // get lower right moves
  currX = bishopX;
  currY = bishopY;
  while (currX < 8 && currY > 1) {
    currX++;
    currY--;
    bishopMoves.push(numberToLetter(currX) + currY.toString());
  }
  // get upper left moves
  currX = bishopX;
  currY = bishopY;
  while (currX > 1 && currY < 8) {
    currX--;
    currY++;
    bishopMoves.push(numberToLetter(currX) + currY.toString());
  }
  // get lower left moves
  currX = bishopX;
  currY = bishopY;
  while (currX > 1 && currY > 1) {
    currX--;
    currY--;
    bishopMoves.push(numberToLetter(currX) + currY.toString());
  }
  return bishopMoves.includes(pawn) ? true : false;
}

function letterToNumber(letter) {
  const letters = 'abcdefgh';
  return letters.indexOf(letter) + 1;
}

function numberToLetter(number) {
  console.log(number);
  return 'abcdefgh'.charAt(number - 1);
}

console.log(bishopAndPawn('a1', 'c3'));
