'use strict';

const getHobbies = (ctx, next) => {
  ctx.body = 'hello from getHobbies controller'
}

const postHobby = (ctx, next) => {
  ctx.body = 'hello from postHobby controller'
}

module.exports = {
  getHobbies,
  postHobby
};
