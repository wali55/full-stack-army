const obj = {
    start: 0,
    stop: 20,
    step: 5
}
obj[Symbol.iterator] = function () {
    let current = this.start;
    const step = this.step;
    const end = this.stop;
    return {
        next() {
            const o = {
                value: current,
                done: current > end
            }
            current += step;
            return o;
        }
    }
}
for (let value of obj) {
    console.log(value);
}

// const objIterator = obj[Symbol.iterator]();
// console.log(objIterator.next());
// console.log(objIterator.next());
// console.log(objIterator.next());