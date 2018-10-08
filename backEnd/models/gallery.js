const mongoose = require('mongoose');

// User Schema
const GallerySchema = mongoose.Schema({
    category: { type: String },
    description: { type: String },
    originalImageName: { type: String },
    imageName: { type: String },
    imageUrl: { type: String },
    createdDate: { type: String }
});

mongoose.model('Gallery', GallerySchema);