function boxBlur(image) {
  debugger;
  const newImage = [];
  for (let i = 1; i < image.length - 1; i++) {
    const line = [];
    for (let j = 1; j < image[0].length - 1; j++) {
      line.push(getAverage(image, i, j));
    }
    newImage.push(line);
  }
  return newImage;
}

function getAverage(image, x, y) {
  let total = 0;
  for (let i = x - 1; i < x + 2; i++) {
    for (let j = y - 1; j < y + 2; j++) {
      total += image[i][j];
    }
  }
  return Math.floor(total / 9);
}

console.log(boxBlur([[1, 1, 1, 1], [1, 5, 5, 1], [1, 5, 5, 1], [1, 1, 1, 1]]));
