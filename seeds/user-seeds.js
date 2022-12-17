const sequelize = require('../config/connection');
const User = require('../models/User');

const userData = [
    {
        username: 'test',
        email: 'test@test.com',
        password: 'password12345'
    },
    {
        username: 'test2',
        email: 'test2@test.com',
        password: 'password987654'
    },
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;