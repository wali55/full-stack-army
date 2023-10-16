/*
const userIterator = await getPostByUser(users);
    await userIterator.next();
    await userIterator.next();
    console.log((await userIterator.next()).value);

    for await (let value of getPostByUser(users)) {
        console.log(value.map((item) => item.title));
    }

    async function * getPostByUser(users) {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    for (let i = 0; i < users.length; i++) {
        const { data: posts } = await axios.get(`${url}?userId=${users[i].id}`);
        yield posts;
    }
}
*/

const axios = require('axios').default;
async function getUsers() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const { data: users } = await axios.get(url);
    return users.map((user) => axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`));
}

(async () => {
    const users = await getUsers();
    for await (let value of users) {
        console.log(value.data);
    }
})();