function incorrectPasscodeAttempts(passcode, attempts) {
  let failedAttempts = 0;
  attempts.forEach(attempt => {
    if (attempt.valueOf() === passcode.valueOf()) {
      failedAttempts++;
    }
  });
  console.log(failedAttempts);
  return failedAttempts > 0 ? true : false;
}

console.log(
  incorrectPasscodeAttempts('1111', [
    '1111',
    '4444',
    '9999',
    '3333',
    '8888',
    '2222',
    '7777',
    '0000',
    '6666',
    '7285',
    '5555',
    '1111'
  ])
);
