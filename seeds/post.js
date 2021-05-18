const { Post } = require('../models');


const postData = [{
    title:  'Welcome to our Chat feature!',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    user_id: 1

}, 
{
    title:  'Collaborate to Discussions',
    content: 'Amet aliquam id diam maecenas ultricies mi eget mauris pharetra.',
    user_id: 2
  
},
{
    title:  'Post a comment today!',
    content: 'Ut etiam sit amet nisl purus in mollis.',
    user_id: 3

}
];

const seedPosts = () => Post.bulkCreate(postData);