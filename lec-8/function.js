// function structure
function function_name(/*input something*/) {
    // function body
    // can write any valid js code

    // return something
}

/*
There are 2 steps of a function
1. Defining a function
2. Invoking a function


function testFunction(a = 10, b =20) {
    const result = a + b + Math.max(a, b);
    console.log(result);
}

testFunction(50, 100);
testFunction(15);
*/

function sleep(name) {
    console.log(`${name} is sleeping`);
}

function awake(name) {
    console.log(`${name} is awake`);
}

function eat(name, time) {
    console.log(`${name} is taking ${time}`);
}

function walk(name, destination) {
    console.log(`${name} is walking to ${destination}`);
}

function study(name) {
    console.log(`${name} is studing`);
}

function work(name) {
    console.log(`${name} is working`);
}

function jobHolderLifeCycle(name) {
    awake(name);
    eat(name, 'breakfast');
    walk(name, 'office');
    work(name);
    eat(name, 'lunch');
    walk(name, 'home');
    eat(name, 'dinner');
    sleep(name);
}

jobHolderLifeCycle('Wali');