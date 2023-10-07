/*
// find and update
const arr = [];
const object = {};
for (let i = 0; i < 5000000; i++) {
    const o = {
        id: i,
        value: i
    }
    arr.push(o);
    object[i] = o;
}
// time required for array
console.time('array');
let id = 4999999;
const obj = arr.find((item) => item.id === id);
obj.value = 555;
console.timeEnd('array');

// time required for array
console.time('object');
object[id].value = 555;
console.timeEnd('object');

// update
const arr = [];
const object = {};
for (let i = 0; i < 5000000; i++) {
    const o = {
        id: i,
        value: i
    }
    arr.push(o);
    object[i] = o;
}
// time required for array
console.time('array');
arr.unshift({
    id: 5000000,
    value: 5000000
});
console.timeEnd('array');

// time required for array
console.time('object');
object[5000000] = {
    id: 5000000,
    value: 5000000
};
console.timeEnd('object');
*/

// delete
const arr = [];
const object = {};
for (let i = 0; i < 5000000; i++) {
    const o = {
        id: i,
        value: i
    }
    arr.push(o);
    object[i] = o;
}
// time required for array
console.time('array');
let id = 4999999;
const obj = arr.findIndex((item) => item.id === id);
arr.splice(id, 1);
console.timeEnd('array');

// time required for array
console.time('object');
delete object[id];
console.timeEnd('object');