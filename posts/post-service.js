module.exports = {
    isValidPost,
    ///this is where you'd do mapping
}

function isValidPost(post) {
    return Boolean(post.title && post.contents);
}