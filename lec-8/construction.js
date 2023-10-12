/*
function strToObj(str) {
    let obj = {};
    for (let s of str) {
        if (s !== ' ') {
            obj[s] = s;
        }
    }
    return obj;
}

// function construction
const fn = new Function(
  "str",
  `let obj = {};
for (let s of str) {
    if (s !== ' ') {
        obj[s] = s;
    }
}
return obj;`
);

console.log(fn("wali"));
*/

const fn = new Function(
  "name",
  "email",
  `
    const fName = name.split(' ')[0];
    console.log('Hello', fName, 'is this your email', email);
`
);

// fn("wali ullah", "wali@email.com");

const operation = [
  {
    args: [20, 10],
    params: ["a", "b"],
    body: 'console.log("a + b = ", a + b)',
  },
  {
    args: [20, 10],
    params: ["a", "b"],
    body: 'console.log("a - b = ", a - b)',
  },
  {
    args: [20, 10],
    params: ["a", "b"],
    body: 'console.log("a * b = ", a * b)',
  },
];
operation.forEach((operation) => {
    const fn = new Function(...operation.params, operation.body);
    fn(...operation.args);
});