// 1.
const calcsum = (a, b) => {
    return a + b; 
}

// -----------------------------

// 2.
 const strictEquality = (a, b) => {
    return a === b;
 }

 // -----------------------------

//  3.
const getTypeOfValue = (a) => {
    return typeof a;
};

// -----------------------------

// 4.
const getFirstChar = (a, n) => {
    return n = a.slice(0, 1);
}

// -----------------------------

// 5.
const getNthChar = (a, n) => {
    return n = a.charAt(n-1);
}

// -----------------------------

// 6.
const extractFirstHalfOfString = (a) => {
    return a.slice(0, a.length/2);
}

// -----------------------------

// 7.
const removeLastNCharactersOfString = (a) => {
    return a.slice(0, -3);
}

// -----------------------------

// 8.
const checkIfNumberIsEven = (a) => {
    if(a % 2 == 0) {
       return true
    }
    else {
       return false
    }
}

// -----------------------------

// 9.
const getPercentageOfNumber = (a, b) => {
    return (a/100)*b;
}

// -----------------------------

// 10.
const useAllTheOperators = (a, b, c, d, e, f) => {
    return ((((a + b) - c) * d) / e) ** f;
}

