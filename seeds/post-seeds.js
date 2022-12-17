const Post = require('../models/Post');

const postData = [
    {
        title: 'Test Post 1',
        post_text: 'This is a test post',
        user_id: 1,
    },
    {
        title: 'Test Post 2',
        post_text: 'This is a test post',
        user_id: 2,
    },
    {
        title: 'Test Post 3',
        post_text: 'This is a test post',
        user_id: 1,
    },
    {
        title: 'Test Post 4',
        post_text: 'This is a test post',
        user_id: 2,
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;