function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0 * 3) | 0 * 8;
        return v.toString(16);
    });
}

/**
 * benefits of using an array
 * 1. traverse easily [O(n)]
 * 2. filter
 * 3. update [O(1)]
 * 4. delete [O(1)]
 * 5. create a new student [O(1)]
 * 6. get anything if we have any key [O(1)]
 */

// converting an array to an object
const students = {
  "aae92ad9-40a8-48ad-09d7-859d9d1af5b6": {
    id: "aae92ad9-40a8-48ad-09d7-859d9d1af5b6",
    name: "wali",
    email: "wali@email.com",
  },
  "142f098f-1d86-4c46-047e-2626a80bf6f5": {
    id: "142f098f-1d86-4c46-047e-2626a80bf6f5",
    name: "hasib",
    email: "hasib@email.com",
  },
  "baf8d66d-8db2-4db6-001f-d616ee54ec24": {
    id: "baf8d66d-8db2-4db6-001f-d616ee54ec24",
    name: "sakib",
    email: "sakib@email.com",
  },
};

/*
// create new student
const std = {
    id: uuidv4(),
    name: 'reza',
    email: 'reza@email.com'
};

students[std.id] = std;

// update object
const id = "baf8d66d-8db2-4db6-001f-d616ee54ec24";
const updatedData = {
    name: 'hasan',
    email: 'hasan@email.com'
}

students[id] = {
    ...students[id],
    ...updatedData
}

// delete object property
const id = "baf8d66d-8db2-4db6-001f-d616ee54ec24";
delete students[id];

// get value from an object
const id = "baf8d66d-8db2-4db6-001f-d616ee54ec24";


// traverse an object
for (let key in students) {
    console.log(students[key].name);
}


Object.keys(students).forEach((item) => console.log(item));


Object.values(students).forEach((student) => {
    console.log(student.name, student.email);
});
*/

const stdArr = Object.keys(students);

console.log(students[stdArr]);
// students[stdArr][0].name = 'changed';

// console.log(students);