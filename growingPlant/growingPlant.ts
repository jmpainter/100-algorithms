function growingPlant(upSpeed, downSpeed, desiredHeight) {
  if (downSpeed > upSpeed) {
    return -1;
  }
  let currHeight = 0;
  let days = 0;
  while (true) {
    currHeight = currHeight + upSpeed;
    currHeight = currHeight - downSpeed;
    if (currHeight >= desiredHeight) {
      return days;
    }
    days++;
  }
}

console.log(growingPlant(100, 10, 910));
