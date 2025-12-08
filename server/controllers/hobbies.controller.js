const raccoonService = require('../services/raccoon');

const Hobby = require('../models/hobby');

const getAllHobbies = async (ctx, next) => {
  const hobbies = await Hobby.find();
  if (!hobbies) {
    console.log('no hobbies found');
    ctx.body = 'no hobbies found';
    ctx.status = 500;
    return;
  }
  ctx.body = hobbies;
};

const getRandomHobbie = async (ctx, next) => {
  const hobbies = await Hobby.find();
  ctx.body = hobbies[Math.floor(Math.random()*hobbies.length)];
}

const getRecHobbies = async (ctx, next) => {
  const user = ctx.params.user.slice(1);
  // console.log('----user of the recom:',user);

  if (!raccoonService.raccoonAvailable) {
    // Return random hobbies if recommendations are not available
    const hobbies = await Hobby.find().limit(10);
    ctx.body = hobbies;
    ctx.status = 200;
    return;
  }

  try {
    const recs = await raccoonService.raccoon.recommendFor(user, 10);
    const recsMap = await Hobby.find({
      _id: {
        $in: recs,
      },
    });

    ctx.body = recsMap;
    ctx.status = 200;
  } catch (err) {
    console.warn('Recommendation error, returning random hobbies:', err.message);
    // Fallback to random hobbies
    const hobbies = await Hobby.find().limit(10);
    ctx.body = hobbies;
    ctx.status = 200;
  }
};

const getSeenHobbies = async (ctx,next) => {
  // const userId = ctx.request.body;
  // // TODO: this
}

const postHobby = async (ctx, next) => {
  const hobbyData = ctx.request.body;
  // console.log(hobbyData);
  // TODO: Response is not arriving to client properly.

  try {
    let hobby = await Hobby.findOne({ name: hobbyData.name });
    console.log('===', hobby);
    if (hobby) {
      ctx.status = 400;
      ctx.body = JSON.stringify({
        status: 'error',
        message: 'There is already a hobby with that name'
      });
    } else {
      console.log('===new hobby');
      hobby = new Hobby({
        name:	hobbyData.name,
        description: hobbyData.description,
        links: hobbyData.links,
        tags: hobbyData.tags,
        pictures: hobbyData.pictures,
      });
      const savedHobby = await hobby.save()
      if (savedHobby) {
        ctx.status = 201;
        ctx.body = JSON.stringify({
          status: 'success',
          data: savedHobby
        });
      }
    }
  } catch (err) {
    console.log(err);
  }
};

const likeHobby = async (ctx, next) => {
  const userId = ctx.token;
  const hobbyId = ctx.request.body.hobbyId;
  // console.log('--userId:', userId);
  // console.log('--hobbyId:', hobbyId);

  if (raccoonService.raccoonAvailable) {
    try {
      await raccoonService.raccoon.liked(userId, hobbyId);
    } catch (err) {
      console.warn('Raccoon like error:', err.message);
    }
  }

  ctx.body = { userId, hobbyId };
};

const dislikeHobby = async (ctx, next) => {
  const userId = ctx.token;
  const hobbyId = ctx.request.body.hobbyId;
  // console.log('--userId:', userId);
  // console.log('--hobbyId:', hobbyId);

  if (raccoonService.raccoonAvailable) {
    try {
      await raccoonService.raccoon.disliked(userId, hobbyId);
    } catch (err) {
      console.warn('Raccoon dislike error:', err.message);
    }
  }

  ctx.body = { userId, hobbyId };
};

module.exports = {
  getAllHobbies,
  getSeenHobbies,
  getRandomHobbie,
  getRecHobbies,
  postHobby,
  likeHobby,
  dislikeHobby,
};
