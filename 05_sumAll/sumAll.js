const sumAll = function(minVal, maxVal) {
    let sum = 0;

    for (let i = minVal; i<=maxVal; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
