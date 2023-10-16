// api call using async await
try {
  async function getUserName(username) {
    const mainUser = await get(`/users?username=username`);
    const posts = await get(`/posts?user_id=${mainUser.id}`);
    const comments = await get(`/comments?post_id=${posts[0].id}`);
    const user = await get(`/users?username=${comments[0].username}`);
    console.log(user);
  }
} catch (error) {
  console.log(error);
}
