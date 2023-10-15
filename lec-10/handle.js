/**
 * - find user by username
 * - find posts by userid
 * - find latest post
 * - find comments by post id
 * - find latest comment
 * - find username of the last commented user
 */

/**
 * /users?username=[username]
 * /posts?user_id=[user_id]
 * /comments?post_id=[post_id]
 * /users?username=[username]
 */

function get(path, cb) {
    const data = {};
    cb(data);
}
// callback hell
function getUserNameFromComment(username) {
    get(`/users?username=${username}`, (user) => {
        get(`/posts?user_id=${user.id}`, (posts) => {
            get(`/comments?post_id=${posts[0].id}`, (comments) => {
                get(`/users?username=${comments[0].username}`, (user) => {
                    console.log(user);
                })
            })
        })
    });
}

getUserNameFromComment('wali');