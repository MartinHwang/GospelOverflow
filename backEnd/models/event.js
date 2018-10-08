const mongoose = require('mongoose');

// User Schema
const EventSchema = mongoose.Schema({    
    contactPerson: { type: String },
    email: { type: String },
    cellphone: { type: String },
    category: { type: String },
    title: { type: String },
    eventDate: { type: String },
    description: { type: String },
    createdBy: { type: String },
    createdDate: { type: String }
});

mongoose.model('Event', EventSchema);