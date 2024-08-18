const sequelize = require('../config/connection.js');
const { User } = require('../models');
const { Post } = require('../models');
const { Comments } = require('../models');

const userData = require('./user-data.js');
const postData = require('./post-data.js');
const commentData = require('./comment-data.js');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();