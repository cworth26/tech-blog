//will reference the models folder 
const { Comment } = require('../models');

const commentInput = [{
    comment_input: "Hey, how are you doing today?",
    user_id: 1,
    post_id: 1,
},
{
    comment_input: "Post as many comments as you'd like",
    user_id: 2,
    post_id: 2,
},
{
    comment_input: "Share your thoughts and ideas here!",
    user_id: 3,
    post_id: 3
}
];

const seedComments = () => Comment.bulkcreate(commentInput);

module.exports = seedComments;