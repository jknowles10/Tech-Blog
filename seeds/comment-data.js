const { Comments } = require('../models');

const commentData = [
    {
        comment_id: '1',
        comment_text: 'Very cool!', 
        author: 'jdoe112',
        post_id: '01'
    }
];
const seedComments = () => Comments.bulkCreate(commentData);

module.exports = seedComments;