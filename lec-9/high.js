/**
 * Higher order function
 * - function can be passed as an argument
 * - function can be returned from another function
 */

/**
 * Hidden concepts around higher order function
 * - Scope
 * - Closure
 * - Execution context
 * - Hoisting
 */

/*
function randSum(max) {
    const { rand1, rand2 } = generateRandomNum();
    return rand1 + rand2;
}

function randSub(max) {
    const { rand1, rand2 } = generateRandomNum();
    return rand1 - rand2;
}

function randSqrSum(max) {
    const { rand1, rand2 } = generateRandomNum();
    return rand1 * rand1 - rand2 * rand2;
}
*/
// higher order function
function generateRandomNum(max, whatDoYouWant) {
    const rand1 = Math.floor(Math.random() * max);
    const rand2 = Math.floor(Math.random() * max);
    const result = whatDoYouWant(rand1, rand2);
    return result;
}

generateRandomNum(100, (rand1, rand2) => {
    console.log(rand1, rand2);
});

const sum = generateRandomNum(10, (rand1, rand2) => rand1 + rand2);
console.log(sum);