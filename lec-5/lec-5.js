/*
const arr = [1, 2, null, undefined, false, '', 'hello', 3];
const num = arr.filter((value) => typeof value === 'number');

console.log(num);


const arr = [1, 2, 3, null, false, 4, 5, '', 'test', 6, 7];

for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') {
        for (let j = i; j < arr.length - 1; j++) {
            arr[j] = arr[j + 1]
        }
    }
}
*/

const arr = [1, 2, 3, null, false, 4, 5, '', 'test', 6, 7];

let count = 0;
for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length - 1; j++) {
        if(typeof arr[j] !== 'number') {
            arr[j] = arr[j + 1];
            arr[j + 1] = undefined;
        }
    }
    if (arr[i] === undefined) {
        count++;
    }
}

arr.length -= count;

console.log(arr);


