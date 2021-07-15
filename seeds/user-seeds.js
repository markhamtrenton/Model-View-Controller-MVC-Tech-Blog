const { User } = require('../models');

const userData = [
  {
    username: 'Jimmy',
    password: 'password1',
  },
  {
    username: 'James',
    password: 'password1',
  },
  { 

    username: 'John',
    password: 'password1',
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;