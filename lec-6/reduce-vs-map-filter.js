/*
const arr = [];
for (let i = 1; i <= 5000000; i++) {
    arr.push(i);
}

console.time('not-opt');
arr.filter((item) => item % 2 === 0).map((item) => item * 2);
console.timeEnd('not-opt');

console.time('opt');
arr.reduce((acc, curr) => {
    if (curr % 2 === 0) {
        curr = curr * 2;
        acc.push(curr);
    }
    return acc;
}, []);
console.timeEnd('opt');
console.log(myReduce([1, 2, 3], (a, b) => a + b, 0));
*/

// reduce implementation
function myReduce(arr, cb, init) {
    let acc = init;
    for (let i = 0; i < arr.length; i++) {
        acc = cb(acc, arr[i], i, arr);
    }
    return acc;
}

const arr = [1, 2, NaN, false, '', 3];
const result = myReduce(arr, (acc, curr) => {
    if (curr) {
        acc.push(curr * curr);
    }
    return acc;
}, []);
console.log(result);