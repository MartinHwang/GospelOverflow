const mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;

const Video = mongoose.model('Video');

module.exports.getVideoAll = (req, res) => {
    console.log('Get request for all videos');

    Video.find()
    .exec( (err,videos) => {
        if(err){
            console.log('Error retrieving videos'); 
        } else {
            res.send(videos);
        }
    });
}

module.exports.getVideo = (req, res) => {
    console.log('Get request for a video');

    if(!ObjectId.isValid(req.params.id)){
        return res.status(404).send(`No record with given _id: ${req.params.id}`);
    }

    console.log('req.params.id: '+req.params.id);
    Video.findById(req.params.id)
    .exec((err, video) => {
        if(err){
            console.log('Error retrieving videos'); 
        } else {
            res.send(videos);
        }
    });
}

module.exports.addVideo = (req, res, next) => {
    console.log('Register a video');

    var newVideo = new Video();
    newVideo.title = req.body.title;
    newVideo.url = req.body.url;
    newVideo.description = req.body.description;
    newVideo.createdDate = new Date(Date.now()).toLocaleString();

    newVideo.save( (err, addedVideo) => {
        if(err){
            console.log("Fail to add Video");
            return next(err);
        } else {
            res.json(addedVideo);
        }
    });
}

module.exports.updateVideo = (req, res, next) => {
    console.log('Update the video');

    if(!ObjectId.isValid(req.params.id)){
        return res.status(404).send(`No record with given _id: ${req.params.id}`);
    }

    let updatedDate = new Date(Date.now()).toLocaleString();

    var video = {
        title: req.body.title,
        url: req.body.url,
        description: req.body.description,
        updatedDate: updatedDate
    }

    Video.findByIdAndUpdate(req.params.id, { $set: video}, { new: true}, (err, updatedVideo) => {
        if(err){
            return next(err);
        } else {
            res.json(updatedVideo);
        }
    });
}
 
module.exports.deleteVideo = (req, res) => {
    console.log('Delete the video');

    Video.findByIdAndRemove(req.params.id, (err, deletedVideo) => {
        if(err){ 
            res.send({success: false, msg: 'Failed to delete member.'});
        } else {
            res.send(deletedVideo);
        }
    });
}