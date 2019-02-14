function bishopAndPawn(bishop, pawn) {
  const bishopX = letterToNumber(bishop[0]);
  const bishopY = parseInt(bishop[1]);
  const pawnX = letterToNumber(pawn[0]);
  const pawnY = parseInt(pawn[1]);

  if (
    bishopX + bishopY === pawnX + pawnY ||
    bishopX + pawnY === pawnX + bishopY
  ) {
    return true;
  }
  return false;
}

function letterToNumber(letter) {
  const letters = 'abcdefghi';
  return letters.indexOf(letter) + 1;
}

console.log(bishopAndPawn('e4', 'b1'));
