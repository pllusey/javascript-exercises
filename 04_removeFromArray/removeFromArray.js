const removeFromArray = function (array, ...args) {
    const newArr = [];

    array.forEach(element => {
        if (!args.includes(element)) {
            newArr.push(element)
        }
    });

    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
