const Users = require('./user');
const Posts = require('./post');
const Comments = require('./comment');

const sequelize = require('../config/connection');

//creating a function that waits for each to execute before moving on
const seedAll = async() => {
    await sequelize.sync({force: true});
    await Users();
    await Posts();
    await Comments();
    process.exit(0);
}

//calling the function created above
seedAll();