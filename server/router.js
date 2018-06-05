const Router = require('koa-router');
const router = new Router();

const hobbiesController = require('./controllers/hobbies.controller');

router.get('/hobbies', hobbiesController.getHobbies)
router.post('/hobbies', hobbiesController.postHobby)

module.exports = router;
