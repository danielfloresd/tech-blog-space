const sequelize = require('../config/connection');
const {User, Post, Comment} = require('../models');

const commentData = [
  {contents : 'This is a test comment', user_id : 1, post_id : 1},
  {contents : 'This is a test comment', user_id : 2, post_id : 2},
  {contents : 'This is a test comment', user_id : 1, post_id : 3},
  {contents : 'This is a test comment', user_id : 2, post_id : 4}
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;