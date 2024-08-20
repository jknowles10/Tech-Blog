const router = require('express').Router();
const { Post, User, Comments } = require('../models');
const withAuth = require('../utils/auth');

//Get all posts
router.get('/', async (req, res) => {
  try { console.log(Post);
    const postData = await Post.findAll({
      include: [
      {
        model: User,
        attributes: ['username'],
      },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', {
     posts,
     logged_in: req.session.logged_in,
    });
  } catch (err) {

    console.log(err);
    res.status(500).json(err);
  }
});

//Get single Post
router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User, 
          attributes: ['username'],
        },
        {
          model: Comments, 
          include: [User], 
        },
      ],
    });
    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!'});
      return;
    }

    const post = postData.get({ plain: true });

  res.render('single-post', {
    ...post, 
    logged_in: req.session.logged_in, 
  });
} catch (err) {
  res.status(500).json(err);
}
});

//Registration route
router.get('/register', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('register', { layout: 'main' });
});
// Login route
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login', { layout: 'main' });
});


 

module.exports = router;
