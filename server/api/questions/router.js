const router = require('express').Router();
const controller = require('./controller');


router.route('/')
  .get(controller.getAll)
  .post(controller.add)

router.route('/:id')
  .delete(controller.removeOne)

module.exports = router;
