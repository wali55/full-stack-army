/*
// pure function

function sum(a, b) {
    return a + b;
}

console.log(sum(10, 20));


// side effect
let limit = 100;
function changeLimit() {
    limit = 500;
}
changeLimit();
console.log(limit);

// pure function
const arr = [1, 2, 3];
function add(arr, data) {
    arr.push(data);
}
add(arr, 4);
console.log(arr);


// impure function
const arr = [1, 2, 3];
function add(data) {
    arr.push(data);
}
add(4);
console.log(arr);
*/

// impure function
function log(msg) {
    console.log(msg);
}
log('wali');