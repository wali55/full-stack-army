/*
// update if we know the index
const arr = [1, 2, 3, 4, 5];
arr[3] = 300;
console.log(arr);

// update if we do not know the index. id 3 value will be 300
const arr = [
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 },
    { id: 4, value: 40 },
];

const result = arr.map((item) => {
    if (item.id === 3) {
        item.value = 300;
    }
});

console.log(arr);


// update if we do not know the index. id 3 value will be 300
const arr = [
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 },
    { id: 4, value: 40 },
];

const index = arr.findIndex((item) => item.id === 3);
arr[index].value = 300;

console.log(arr);
*/

// update if we do not know the index. id 3 value will be 300
const arr = [
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 },
    { id: 4, value: 40 },
];

const obj = arr[1];
obj.value = 200;

const object = arr.find((item) => item.id === 3);
object.value = 300;
console.log(arr);
console.log(arr[2] === object);