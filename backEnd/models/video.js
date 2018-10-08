const mongoose = require('mongoose');

// User Schema
const VideoSchema = mongoose.Schema({
    title: { type: String },
    url: { type: String },
    description: { type: String },    
    createdBy: { type: String },    
    createdDate: { type: String },
    updatedBy: { type: String },
    updatedDate: { type: String }
});

mongoose.model('Video', VideoSchema);