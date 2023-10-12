function sum(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function times(a, b) {
    return a * b;
}

const a = 10;
const b = 5;

const r = times(sum(a, b), sub(a, b));
console.log('result', r);

// Functional Programming: Function is the first class citizen.
// We can do functional programming in a programming language if there we can treat function as a value.

/**
 * Benifits of functional programming
 * 1. Can store a function inside a variable
 * 2. We can store function inside an object/array
 * 3. We can pass function as an argument
 * 4. We can return a function from another function
 */