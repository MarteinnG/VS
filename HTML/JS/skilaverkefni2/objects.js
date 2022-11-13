// 1. XXX
const checkIfPropertyExistsAndTruthy = (a, b) => {
    const exist = a.hasOwnProperty(b);
    if(exist) {
        return exist;
    }
}

// ---------------------------------------

// 2.
const getCountry = (obj) => {
    return obj.country;
}

// ---------------------------------------

// 3.
const getWeirdKeyValue = (obj) => {
    return obj['prop-2'];
}

// ---------------------------------------

// 4.
const getPropertyByString = (obj, key) => {
    return Object.values(obj).find(value => obj[key] = key);
}

// ---------------------------------------

// 5.
const checkIfPropertyExists = (a, b) => {
    const exist = a.hasOwnProperty(b);
    return exist;
}

// ---------------------------------------

// 6.

const createObjectWithKeyValue = (a) => {
    const b = {key: a}
    return b;
}

// ---------------------------------------

// 7.

const createObjectWithKeyAndValue = (a, b) => {
    const c = {[a]: b};
    return c;
}

// ---------------------------------------

// 8.

const createObjectFromArrays = (a, b) => {
    const c = {};
    a.forEach((key, value) => {c[key] = b[value]});
    return c;
}

// ---------------------------------------

// 9.

const extractKeysFromObject = (a) => {
    return Object.keys(a);
}

// ---------------------------------------

// 10. xxx

const getNestedProperty = (obj) => {
    return obj, 'a.b';
}

// ---------------------------------------

// 11.

const calcSumOfAllObjectValues = (a) => {
    let sumValues = 0;
    Object.values(a).forEach(value => {sumValues += value});
    return sumValues;
}

// ---------------------------------------

// 12.

const removePropertyB = (obj) => {
    const {b, ...restObject} = obj;
    return restObject;
}

// ---------------------------------------

// 13.

const mergeAndFixObjects = (x, y) => {
    y.d = y.b;
    delete y.b;
    const merge = {...x, ...y};
    return merge;
}   

// ---------------------------------------

// 14. XXX

const multipyAllValuesByB = (a, b) => {
    Object.values(a).forEach(value => {b * value});
    return a;
}









