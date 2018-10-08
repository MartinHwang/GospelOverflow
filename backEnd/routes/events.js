var express = require('express');
var router = express.Router();

const ctrlEvent = require('../controllers/event.controller');

router.get('', ctrlEvent.getEventAll);

router.get('/:id', ctrlEvent.getEvent);

router.post('/register', ctrlEvent.addEvent);

router.put('/:id', ctrlEvent.updateEvent);

router.delete('/:id', ctrlEvent.deleteEvent);

module.exports = router;