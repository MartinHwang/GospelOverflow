var express = require('express');
var router = express.Router();

const ctrlGallery = require('../controllers/common.controller');

router.get('', ctrlGallery.getGalleryAll);

router.post('/upload', ctrlGallery.addGallery);

router.post('/download', ctrlGallery.downloadImage);

router.post('/downloads', ctrlGallery.downloadImages);


module.exports = router;

