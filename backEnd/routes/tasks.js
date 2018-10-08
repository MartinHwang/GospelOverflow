var express = require('express');
var router = express.Router();

const ctrlTask = require('../controllers/task.controller');

router.get('', ctrlTask.getTaskAll);

router.get('/:category', ctrlTask.getTasks);

router.post('/register', ctrlTask.addTask);

module.exports = router;