const Post = require('../models/Post');

const postData = [
    {
        title: 'Test Post 1',
        contents: 'This is a test post',
        user_id: 1,
    },
    {
        title: 'Test Post 2',
        contents: 'This is a test post',
        user_id: 2,
    },
    {
        title: 'Test Post 3',
        contents: 'This is a test post',
        user_id: 1,
    },
    {
        title: 'Test Post 4',
        contents: 'This is a test post',
        user_id: 2,
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;