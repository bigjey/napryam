const router = require('express').Router();
const questions = require('./questions/router');

router.use('/questions', questions);

module.exports = router;
