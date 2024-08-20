const removeFromArray = function(array, num) {
    const filteredArr = array.filter((el) => el != num)
    return filteredArr;
};

// Do not edit below this line
module.exports = removeFromArray;
