/*
const isResolved = true;

const promise = new Promise((resolve, reject) => {
    if (isResolved) {
        resolve('completed');
    } else {
        reject(new Error('something went wrong'));
    }
});

console.log(promise);

promise.catch(() => {
    console.log('error');
}).then((result) => console.log(result));

// promise
function wait(ms) {
    const promise = new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
    return promise;
}

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

wait(10).then(() => console.log('done in 10ms'));
wait(100).then(() => console.log('done in 100ms'));
wait(1000).then(() => console.log('done in 1000ms'));
*/

/**
 * /users?username=[username]
 * /posts?user_id=[user_id]
 * /comments?post_id=[post_id]
 * /users?username=[username]
 */
// call api using promise
const get = (url) => Promise.resolve();

get(`/users?username=wali`)
.then((user) => {
    // we will do operations here
    return get(`/posts?user_id=${user.id}`);
})
.then((posts) => {
    const latestPost = posts[0];
    return get(`/comments?post_id=${latestPost.id}`);
})
.then((comments) => {
    const latestComment = comments[0];
    return get(`/users?username=${latestComment.username}`);
})
.then((user) => {
    console.log(user);
})
.catch(() => {
    console.log('error');
});