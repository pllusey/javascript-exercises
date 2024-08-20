const reverseString = function(str) {
    let reversedString = "";
    stringArr = str.split("");
    for (let i=stringArr.length-1; i>=0; i--) {
        reversedString += stringArr[i];
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
