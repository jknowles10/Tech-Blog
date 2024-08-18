const router = require('express').Router();
const { Post } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try { console.log(Post);
    const postData = await Post.findAll({
      attributes: ['title', 'author', 'date', 'content'],
      
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', {
     posts,
    });
  } catch (err) {

    console.log(err);
    res.status(500).json(err);
  }
});

// router.get('/login', (req, res) => {
//   if (req.session.logged_in) {
//     res.redirect('/');
//     return;
//   }

//   res.render('login');
// });

module.exports = router;
