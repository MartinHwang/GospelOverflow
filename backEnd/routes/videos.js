var express = require('express');
var router = express.Router();

const ctrlVideo = require('../controllers/video.controller');

// Getting All Videos
router.get('', ctrlVideo.getVideoAll);

// Getting Video
router.get('/:id', ctrlVideo.getVideo);

// Register Video
router.post('/register', ctrlVideo.addVideo);

// Updating Video
router.put('/:id', ctrlVideo.updateVideo);

// Delete Video
router.delete('/:id', ctrlVideo.deleteVideo);

module.exports = router;