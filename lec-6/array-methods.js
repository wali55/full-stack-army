/*
// map
const arr = [1, 2, 3];
const strArr = arr.map((value) => value);
console.log(strArr);


// filter
const arr = [1, 2, 3, '', false, 4, 5];
const filtered = arr.filter((value) => value);
const str = filtered.map((item) => item.toString());
console.log(str);
const reduced = arr.reduce((acc, curr) => {
    if (typeof curr === 'number') {
        curr = curr.toString();
        acc.push(curr);
    }
    return acc;
}, []);
const reduced = arr.reduce((acc, curr, index) => {
    if (index === 0) acc += '[';
    if (curr) {
        acc += curr.toString() + (index < arr.length - 2 ? ', ' : '');
    }
    if (index === arr.length - 1) acc += ']';
    return acc;
}, '');
*/

/**
 * map -> [return an array same length as original array]
 * filter -> [returns array with filtered element]
 * reduce -> can return number, string, boolean, array, object, function
 */
// reduce
const arr = [1, 2, 3, '', false, 4, 5, NaN];
const reduced = arr.reduce((acc, curr) => {
    if (curr) {
        curr = curr.toString();
        acc.push(curr);
    }
    return acc;
}, []);
console.log(reduced);