const { Post } = require(../models);

const postData = [
{ 
  id: '',
  title: 'Post 1',
  author: 'User 1',
  date: '',
  content: 'This is the first post',
},
{ 
    id: '',
    title: 'Post 1',
    author: 'User 1',
    date: '',
    content: 'This is the first post',
  },
{
    id: '',
    title: 'Post 1',
    author: 'User 1',
    date: '',
    content: 'This is the first post',
},
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;