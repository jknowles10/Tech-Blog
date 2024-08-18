const withAuth = (req, res, next) => {
    if (!req.session.logged_in) {
      res.render('/');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;
  