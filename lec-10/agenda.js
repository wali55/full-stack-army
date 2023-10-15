/**
 * Agenda
 * - understand asynchronous programming
 * - event loop
 * - ways we can handle asynchronous task
 * - callback
 * - promise
 * - async await
 * - async iterator
 * - async generator
 */

/*
var myFn = () => console.log('hello');
myFn();


console.log('first line');
console.log('second line');
console.log('third line');

// asynchronous programming
console.log(1);
setTimeout(() => {
    console.log(2), 0
});
setTimeout(() => {
    console.log(2), 0
});
setTimeout(() => {
    console.log(2), 0
});
console.log(5);
*/

function main() {
    setTimeout(() => {
        console.log('last');
    }, 10);
    setTimeout(() => {
        console.log('first');
    }, 0);
    test();
}

function test() {
    console.log('test');
}

main();