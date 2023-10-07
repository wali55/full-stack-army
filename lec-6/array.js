/**
 * stroing info of 10 students
 * -id
 * -name
 * -email
 */

/**
 * 
 *  a utility to create random id
 */
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0 * 3) | 0 * 8;
        return v.toString(16);
    });
}

// console.log(uuidv4());

const students = [
    {
      id: 'aae92ad9-40a8-48ad-09d7-859d9d1af5b6',
      name: 'wali',
      email: 'wali@email.com'
    },
    {
      id: '142f098f-1d86-4c46-047e-2626a80bf6f5',
      name: 'hasib',
      email: 'hasib@email.com'
    },
    {
      id: 'baf8d66d-8db2-4db6-001f-d616ee54ec24',
      name: 'sakib',
      email: 'sakib@email.com'
    }
];

/**
 * benefits of using an array
 * 1. traverse easily [O(n)]
 * 2. filter
 * 3. update [push -> O(n)]
 * 4. delete [splice -> O(n), filter -> O(n)]
 * 5. create a new student [push -> O(1), unshift -> O(n)]
 */

// create a new student
students.push({
  id: uuidv4(),
  name: 'rakib',
  email: 'rakib@email.com',
});
/*
// update an element
const id = 'baf8d66d-8db2-4db6-001f-d616ee54ec24';
const index = students.findIndex((student) => student.id === id);
const updateData = {
  name: 'hasan',
  // email: 'hasan@email.com'
}

students[index] = {
  ...students[index],
  ...updateData
}

// delete
const id = 'baf8d66d-8db2-4db6-001f-d616ee54ec24';
const index = students.findIndex((student) => student.id === id);
students.splice(index, 1);

console.log(students);


for (let i = 0; i < students.length; i++) {
  console.log(students[i].name);
}


// for in
for (let index in students) {
  console.log(students[index].name);
}
*/

// for of
for (let student of students) {
  console.log(student.name);
}