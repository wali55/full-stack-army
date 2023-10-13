/*
// execution context
function A() {
    console.log('I am A');
}
function B() {
    A();
}
function C() {
    B();
    B();
}
function D() {
    C();
    A();
}

D();


// function expression
const r = randomSum(25);
console.log(r);

const randomSum = function (max) {
    const rand1 = Math.floor(Math.random() * max);
    const rand2 = Math.floor(Math.random() * max);
    return rand1 + rand2;
}

console.log(test);
const test = 'hello';
*/

// pure function no side effect
const arr = [1, 2, 3];
function fn(arr, data) {
    arr = [...arr, data];
    return arr;
}

console.log(fn(arr, 4));