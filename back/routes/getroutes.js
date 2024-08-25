const router = require('express').Router();
const { getTasks } = require('../controllers/getTasks');

router.get('/get_Tasks/:userId', getTasks);

module.exports = router;
