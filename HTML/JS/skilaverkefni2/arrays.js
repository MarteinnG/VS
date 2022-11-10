// 1.
const getNthCharacterInArray = (a, n) => {
    return a.at(n-1);
}

// ---------------------------------------

// 2.
const removeFirstThreeElements = (a) => {
    return a.slice(3);
}

// ---------------------------------------

// 3.
const removeLastNElements = (a, n) => {
    return a.slice(-n);
}

// ---------------------------------------

// 4.
const countNumberOfElements = (a) => {
    return a.length;
}

// ---------------------------------------

// 5.
const countNumberOfNegativeValues = (a) => {
    const negatives = [];
    const sum = 0;
    a.forEach(value => {
        if(value < 0) {
            negatives.push(value);
        } 
    })
    return negatives.length;
    }

// ---------------------------------------

// 6.
const calcSumOfArrayOfNumbers = (a) => {
    let sum = 0;
    a.forEach(value => {
        sum += value;
    });
    return sum;
}

// ---------------------------------------

// 7.
const calcAvgOfArrayOfNumbers = (arr) => {
    let sum = 0;
    arr.forEach(value => {
        sum += value
    })
    return sum / arr.length;
}

// ---------------------------------------

// 8.
const getLongestStringFromArray = (arr) => {
    var longest = '';
    arr.forEach(word => {
        if(word.length > longest.length) {
            longest = word;
        }
    })
    return longest;
}

// ---------------------------------------

// 9.
const areAllEqual = (arr) => {
    arr.forEach(element => {
        element === element[0];
    }) 
    if(element === element[0]) {
        return true
    } else {
        return false
    }
    
}

