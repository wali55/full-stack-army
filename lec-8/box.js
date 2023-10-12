/*
function box(n) {
    for (let i = 0; i < n; i++) {
        let line = '';
        for (let j = 0; j < n; j++) {
            line += '* ';
        }
        console.log(line);
    }
}

box(5);
*/

const operations = [
    {
        args: [20, 10],
        params: ['a', 'b'],
        body: 'console.log("a + b =", a + b)'
    },
    {
        args: [5],
        params: ['n'],
        body: `for (let i = 0; i < n; i++) {
            let line = '';
            for (let j = 0; j < n; j++) {
                line += '* ';
            }
            console.log(line);
        }`
    }
];

const fn = operations.forEach((operation) => {
    const newFn = new Function(...operation.params, operation.body);
    newFn(...operation.args);
});

