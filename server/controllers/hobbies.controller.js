const raccoon = require('../services/raccoon');

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

  const recs = await raccoon.recommendFor(user, 10);
  const recsMap = await Hobby.find({
    _id: {
      $in: recs,
    },
  });

  ctx.body = recsMap;
  ctx.status = 200;
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
      if (savedHobby.length) {
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

const likeHobby = (ctx, next) => {
  const userId = ctx.token;
  const hobbyId = ctx.request.body.hobbyId;
  // console.log('--userId:', userId);
  // console.log('--hobbyId:', hobbyId);

  raccoon.liked(userId, hobbyId);

  ctx.body = { userId, hobbyId };
};

const dislikeHobby = (ctx, next) => {
  const userId = ctx.token;
  const hobbyId = ctx.request.body.hobbyId;
  // console.log('--userId:', userId);
  // console.log('--hobbyId:', hobbyId);

  raccoon.disliked(userId, hobbyId);

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
