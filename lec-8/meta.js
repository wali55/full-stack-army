// meta programming

const fData = {
    params: ['a', 'b'],
    body: [
        'const r = a + b',
        'return r'
    ]
}

const fBody = fData.body.reduce((acc, curr) => {
    acc += curr + ';';
    return acc;
}, '');

const tf = new Function(...fData.params, fBody);
console.log(tf(100, 200));