function addBorder(picture) {
  const bordered = [];
  const wall = '*'.repeat(picture[0].length + 2);
  bordered.push(wall);
  picture.forEach(row => {
    bordered.push('*' + row + '*');
  });
  bordered.push(wall);
  return bordered;
}

console.log(addBorder(['abc', 'ded']));
