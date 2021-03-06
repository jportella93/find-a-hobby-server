'use strict';
const Router = require('koa-router');

const router = new Router();

const hobbiesController = require('./controllers/hobbies.controller');
const appController = require('./controllers/app.controller');
const sessionController = require('./controllers/session.controller');

router.get('/', appController.getIndex);
router.get('/hobbies/all', hobbiesController.getAllHobbies);
router.get('/hobbies/seen', hobbiesController.getSeenHobbies);
router.get('/hobbies/random', hobbiesController.getRandomHobbie);
router.get('/hobbies/rec:user', hobbiesController.getRecHobbies);
router.post('/hobbies', hobbiesController.postHobby);
router.put('/hobbies/like', hobbiesController.likeHobby);
router.put('/hobbies/dislike', hobbiesController.dislikeHobby);

router.get('/sid', sessionController.getSessionId);

module.exports = router;
