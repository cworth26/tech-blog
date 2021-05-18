const { User } = require('../models');

//this is to be used to create a username and a password
const userData = [{
    username: 'Test',
    password: 'testing'

},
{
    username: 'Nita',
    password: 'testing'
 
},
{
    username: 'Student',
    password: 'testing'

}
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;