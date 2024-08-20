const sumAll = function(minVal, maxVal) {
    const difference = Math.abs(minVal - maxVal);
    let sum = minVal;

    while (sum < difference) {
        for (let i=0; i<difference; i++) {
            return sum += i
        }
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
