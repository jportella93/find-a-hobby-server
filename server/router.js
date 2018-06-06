'use strict';
const Router = require('koa-router');

const router = new Router();

const hobbiesController = require('./controllers/hobbies.controller');

router.get('/hobbies/all', hobbiesController.getAllHobbies);
router.get('/hobbies/rec:user', hobbiesController.getRecHobbies);
router.post('/hobbies', hobbiesController.postHobby);
router.put('/hobbies/like', hobbiesController.likeHobby);
router.put('/hobbies/dislike', hobbiesController.dislikeHobby);

module.exports = router;
