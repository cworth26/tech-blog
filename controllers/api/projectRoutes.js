//change to comment js file

const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//updates session
router.post('/', withAuth, (req, res) => {
  if (req.session) {
    Comment.create({
      comment_input: req.body.comment_input,
      user_id: req.session.user_id,
      post_id: req.body.post_id,
    })
    .then(dbCommentData => res.json(dbCommentData))
  .catch (err => {
    console.log(err);
    res.status(400).json(err);
  })
}
});

//destroys session
router.delete('/:id', withAuth, async (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id,
  }
}).then(dbCommentData => {
  if (!dbCommentData) {
    res.status(404).json({message: 'no comments'});
    return;
  }
  res.json(dbCommentData);
}) .catch (err => {
  console.log(err);
    res.status(500).json(err);
  });
});

router.put('/:id', withAuth, (req, res) => {
  Comment.update ({
    comment_input: req.body.comment_input
  },
  {
where: {
  id: req.params.id
}
  }) .then(dbCommentData => {
    if (!dbCommentData) {
      res.status(404).json({ message: 'no comments'});
      return;
    }
    res.json(dbCommentData);
  }) .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;
