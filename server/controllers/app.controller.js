const getIndex = (ctx) => {
  ctx.body = 'this is the main view of Find a Hobby';
  ctx.status = 200;
};

module.exports = {
  getIndex,
};
