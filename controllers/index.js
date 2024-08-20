const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);

router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.error('Logout Error:', err);
        return res.status(500).json({ message: 'Error logging out' });
      }
      res.redirect('/'); 
    });
  });

module.exports = router;
