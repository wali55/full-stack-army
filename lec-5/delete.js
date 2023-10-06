/*
// delete the obj that has id 4
const arr = [
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 },
    { id: 4, value: 40 },
];

const deleted = arr.filter((item) => item.id !== 4);
console.log(deleted);
*/

const arr = [
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 },
    { id: 4, value: 40 },
];

const index = arr.findIndex((item) => item.id === 4);

const spliced = arr.splice(index, 1);

console.log(arr);