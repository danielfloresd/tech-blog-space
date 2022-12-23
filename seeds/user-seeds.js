const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'BobB',
    email: 'bc@uofa.edu',
    password: 'password12345'
  },
  {
    username: 'Alice',
    email: 'a@blogspace.com',
    password: 'password12345'
  },
  {
    username: 'Bert',
    email: 'b@blogspace.com',
    password: 'password12345'
  },
  {
    username: 'Carlos',
    email: 'c@blogspace.com',
    password: 'password12345'
  },
  {
    username: 'David',
    email: 'd@blogspace.com',
    password: 'password12345'
  },
  {
    username: 'Esther',
    email: 'e@blogspace.com',
    password: 'password12345'
  },
  {
    username: 'Fred',
    email: 'f@blogspace.com',
    password: 'password12345'
  },
  {
    username: 'Gina',
    email: 'g@blogspace.com',
    password: 'password12345'
  },
  {
    username: 'Hank',
    email: 'h@blogspace.com',
    password: 'password12345'
  },
  {
    username: 'Irene',
    email: 'i@blogspace.com',
    password: 'password12345'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
