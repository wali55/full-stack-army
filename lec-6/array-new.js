const names = [
    'Mohammad Waliullah',
    'Mohammad Hasib Ullah',
    'Sakib Al Hasan',
    'Rubel Rana',
    'Ali Hossain',
    'Maisum Sarowar'
];

const result = names.reduce((acc, curr) => {
    const firstLetter = curr.charAt(0).toUpperCase();
    if (acc[firstLetter]) {
        acc[firstLetter].push(curr);
    } else {
        acc[firstLetter] = [curr];
    }
    return acc;
}, {});

Object.keys(result).forEach((key) => {
    const names = result[key];
    console.log('----------',key,'----------');
    names.forEach((name) => console.log(name));
})