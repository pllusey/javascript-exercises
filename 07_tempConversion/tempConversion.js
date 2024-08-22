const convertToCelsius = function (fahrenheit) {
  const celsius = (fahrenheit - 32) * (5 / 9);
  if (celsius == 0) {
    return celsius;
  } else {
    return Number.parseFloat(celsius.toFixed(1));
  }
};

const convertToFahrenheit = function (celsius) {
  const fahrenheit = celsius * (9 / 5) + 32;
  if (fahrenheit == 32) {
    return fahrenheit;
  } else {
    return Number.parseFloat(fahrenheit.toFixed(1));
  }
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
