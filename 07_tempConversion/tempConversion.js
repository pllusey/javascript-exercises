const convertToCelsius = function(fahrenheit) {
  const celsius = Math.floor((fahrenheit - 32) * (5/9))
  return !Number.isInteger(celsius) ? celsius.toFixed(1) : celsius
};

const convertToFahrenheit = function(celsius) {
  const fahrenheit = Math.floor((celsius * (9/5)) + 32);
  return !Number.isInteger(fahrenheit) ? fahrenheit.toFixed(1) : fahrenheit
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
