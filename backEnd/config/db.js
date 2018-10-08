const mongoose = require('mongoose');
const config = require('./dbConfig');

mongoose.connect(config.database, (err) => {
    if(!err){
        console.log('MongoDB connection successed. '+config.database);
    } else {
        console.log('Error in MongoDB connection: '+JSON.stringify(err, undefined, 2));
    }
});

require('../models/user');
require('../models/member');
require('../models/gallery');
require('../models/video');
require('../models/event');
require('../models/task');