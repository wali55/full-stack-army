/*
const microphone = {
    brand: 'fifine',
    indicator: true, 
    price: 800,
    color: 'black',
    startRecording: () => {
        console.log('recording started');
    },
    stopReconding() {
        console.log('recording stopped');
    }
};
console.log(microphone.toString());


const newObj = new Object();
newObj.name = 'test';
newObj.time = new Date();
console.log(newObj);


const microphone = {
    brand: 'fifine',
    indicator: true, 
    price: 800,
    color: 'black',
    startRecording: () => {
        console.log('recording started');
    },
    stopReconding() {
        console.log('recording stopped');
    },
    toString() {
        return this.brand;
    }
};

console.log('microphone =', microphone.toString());
Object.freeze(microphone);
microphone.newProperty = 'my new property';
console.log(microphone);
console.log(Object.keys(microphone));
console.log(Object.values(microphone));


const microphone = {
    brand: 'fifine',
    indicator: true, 
    price: 800,
    color: 'black',
    startRecording: () => {
        console.log('recording started');
    },
    stopReconding() {
        console.log('recording stopped');
    },
};
for (let keys in microphone) {
    console.log(keys, microphone[keys]);
}


const microphone = {
    brand: 'fifine',
    indicator: true, 
    price: 800,
    color: 'black',
    startRecording: () => {
        console.log('recording started');
    },
    stopReconding() {
        console.log('recording stopped');
    },
};
console.log(Object.entries(microphone));
*/
// create obj from entries
const arr = [
    [ 'brand', 'fifine' ],
    [ 'indicator', true ],
    [ 'price', 800 ],     
    [ 'color', 'black' ]
];

console.log(Object.fromEntries(arr));