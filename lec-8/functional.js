function testFunction() {
    console.log('I am a test function');
}
// function inside variabel
const fn = testFunction;
console.log(fn);
fn();

// function inside array
const arr = [testFunction, fn];

// function inside object
const obj = {
    fn: testFunction
}

// return a function inside of a function
function returnFunction() {
    return testFunction;
}