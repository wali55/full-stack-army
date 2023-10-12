/*
function sqr(n) {
    return n * n;
}

function cube(n) {
    return n * n * n;
}
*/

// return a function from another function
function power(p) {
    return function (n) {
        let result = 1;
        for (let i = 1; i <= p; i++) {
            result *= n;
        }
        return result;
    }
}
const sqr = power(2);
// console.log(sqr(5));

// lexing/parsing/tokenize -> compile -> run
// As this scope is happing during lexing so it is called lexical scope.

/**
 * Scope
 * - Global Scope (variable declared in js file)
 * - Local Scope/Functional Scope (variable declared inside a funcion)
 * - Block Scope (where there is a block variable is declared)
 */

// lexical scope
{
    const num = 10;
    {
        {
            console.log(num);
        }
    }
}