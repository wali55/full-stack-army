/*
const arr = [1, 2, 3];

let index = 0;
function next() {
    return arr[index++];
}

console.log(next());
for (let i = 0; i < 3; i++) {
    console.log('hello world');
}
console.log(next());



const cconst channel = 'wali';hannelIterator = channel[Symbol.iterator]();
console.log(channelIterator.next());
console.log(channelIterator.next());
console.log(channelIterator.next());
console.log(channelIterator.next());
console.log(channelIterator.next());


const name = 'wali';
for (let char of name) {
    console.log(char);
}
*/

const name = 'wali';
const nameIterator = name[Symbol.iterator]();

while (true) {
    const data = nameIterator.next();
    if (!data.done) {
        console.log(data.value);
    }
}