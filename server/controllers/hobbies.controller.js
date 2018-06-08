

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
  ctx.headers = {'Access-Control-Allow-Credentials': 'true'}
  ctx.status = 200;
};

const getRecHobbies = async (ctx, next) => {
  const user = ctx.params.user.slice(1);

  const recs = await raccoon.recommendFor(user, 10);
  const recsMap = await Hobby.find({
    _id: {
      $in: recs,
    },
  });

  ctx.body = recsMap;
  ctx.status = 200;
};

const postHobby = async (ctx, next) => {
  const hobbyData = ctx.request.body;

  let hobby = await Hobby.findOne({ name: hobbyData.name });

  if (hobby) {
    ctx.status = 400;
    ctx.body = 'There is already a hobby with that name';
    return;
  }


  hobby = new Hobby({
    name:	hobbyData.name,
    description: hobbyData.description,
    links: hobbyData.links,
    tags: hobbyData.tags,
    pictures: hobbyData.pictures,
  });

  // TODO: send response for post hobby endpoint.
  ctx.body = hobby.save((err, document) => {
    if (err) {
      console.log('error in postHobby.controller:', err);
      ctx.status = 500;
      return 'error in postHobby.controller:';
    }
    ctx.status = 200;
    console.log(document);
    return document;
  });
};

const likeHobby = (ctx, next) => {
// BUG: sessionID is changing with every request
  const userId = ctx.session.sid;
  const hobbyId = ctx.request.body.hobbyId;
  console.log('--userId:', userId);
  console.log('--hobbyId:', hobbyId);

  // raccoon.liked(userId, hobbyId);

  ctx.body = { userId, hobbyId };
};

const dislikeHobby = (ctx, next) => {
  const userId = ctx.session.sid;
  const hobbyId = ctx.request.body.hobbyId;
  console.log('--userId:', userId);
  console.log('--hobbyId:', hobbyId);

  raccoon.disliked(userId, hobbyId);

  ctx.body = { userId, hobbyId };
};

module.exports = {
  getAllHobbies,
  getRecHobbies,
  postHobby,
  likeHobby,
  dislikeHobby,
};
