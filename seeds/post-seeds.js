const { Post } = require('../models');

const postData = [
  {
    title: 'Red Dead Redemtion 2',
    content:
    'Set in a fictional recreation of the American Old West in 1899, Red Dead Redemption 2 focuses on the life of Arthur Morgan and his position in the notorious Van der Linde gang.',
    user_id: 1,
  },
  {
    title: 'Red Dead Redemtion 1',
    content:
    'Red Dead Redemption is set during the decline of the American frontier in the year 1911 and follows John Marston, a former outlaw whose wife and son are taken hostage by the government in ransom for his services as a hired gun.',
    user_id: 2,
  },
  {
    title: 'RockStar Games',
    content:
    'Rockstar Games, Inc. is an American video game publisher based in New York City. The company was established in December 1998 as a subsidiary of Take-Two Interactive, using the assets Take-Two had previously acquired from BMG Interactive.',
    user_id: 3,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;