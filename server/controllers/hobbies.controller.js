'use strict';

const Hobby = require('../models/hobby')


const getHobbies = async (ctx, next) => {
  const hobbies = await Hobby.find();
  if (!hobbies) {
    console.log('no hobbies found');
    ctx.body = 'no hobbies found';
    ctx.status = 500;
    return;
  }
  ctx.body = hobbies;
  ctx.status = 200;
}

const postHobby = async (ctx, next) => {
  const hobbyData = ctx.request.body;

  const hobby = new Hobby ({
    name:	hobbyData.name,
    description: hobbyData.description,
    "links": hobbyData.links,
    "tags": hobbyData.tags,
    "pictures": hobbyData.pictures
  })

// TODO: send response for post hobby endpoint. 
  ctx.body = hobby.save((err,document) => {
    if (err) {
      console.log('error in postHobby.controller:', err);
      ctx.status = 500;
      return 'error in postHobby.controller:';
    }
    ctx.status = 200;
    console.log(document);
    return document;
  })
}

module.exports = {
  getHobbies,
  postHobby
};
