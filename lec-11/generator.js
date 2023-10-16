/*
// generator
function * myGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const iterator = myGenerator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

const ranngeIt = range(1, 10, 3);
console.log(ranngeIt.next());
console.log(ranngeIt.next());
console.log(ranngeIt.next());
console.log(ranngeIt.next());
console.log(ranngeIt.next());
console.log(ranngeIt.next());

// generator
function * range(start = 0, stop = 20, step = 5) {
    for (let i = start; i <= stop; i += step) {
        yield i;
    }
}

for (let value of range(1, 20, 5)) {
    console.log(value);
}
*/

function * generateId() {
    let index = 1;
    while (true) {
        yield index++;
    }
}

const id = generateId();
console.log(id.next().value);
console.log(id.next().value);
console.log(id.next().value);