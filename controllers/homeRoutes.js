const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
// const withAuth = require('../utils/auth');
//callback function req, res
router.get('/', (req, res) => {
  Post.findAll({
    attributes: [
      'id', 
      'title',
      'content',
      'created_at'
    ],
    include: [{
      model: Comment,
      attributes: [
        'id', 
      'comment_input',
      'post_id',
      'user_id',
      'created_at'
      ],
      include: {
        model: User,
        attributes: ['username']
      }
    },
  {
    model: User,
    attributes: ['username']
  }
]
  })
  // then statement to take in request
  .then(dbPostData => {
    const posts = dbPostData.map(post => post.get({ plain: true}));
    res.render('homepage', { posts, loggedIn: req.session.loggedIn});
  })
  //if there is an error they it will log to the console 
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });

});

//talks to the login page
router.get('/login', (req, res) => {
  if (req.session.logginIn) {
    //redirect to homepage if they are logged in
    res.redirect('/');
    return;
  }
  res.render('login');
});

//talks to signup page
router.get('/signup', (req, res) => {
  res.render('signup');
});




// include a route to include post page? 
//comments?
// below line 66 do not need for tech blogg assigment

    // Get all projects and JOIN with user data
    // const projectData = await Project.findAll({
    //   include: [
    //     {
    //       model: User,
    //       attributes: ['name'],
    //     },
    //   ],
    // });

   
// Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Project }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
// //     res.redirect('/profile');
// //     return;
//   }

//   res.render('login');
// });

module.exports = router;
