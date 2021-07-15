const { Comment } = require('../models');

const commentData = [
  {
    comment_text: 'I loved rdr2',
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text:
    'rdr 1 is a classic',
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: 'I love rockstar games',
    user_id: 3,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;