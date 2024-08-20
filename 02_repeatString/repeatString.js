const repeatString = function (string, num) {
  let count = 0;
  let repeatedString = "";

  if (!string) {
    return repeatedString;
  } else if (num < 0) {
    return "ERROR";
  }

  while (count < num) {
    for (let i = 0; i < string.length; i++) {
      repeatedString += string[i];
    }
    count++;
  }

  return repeatedString;
};

// Do not edit below this line
module.exports = repeatString;
