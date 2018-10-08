const mongoose = require('mongoose');

// Task Schema
const TaskSchema = mongoose.Schema({
    title: { type: String},
    name: { type: String},
    startDate: { type: String},
    endDate: { type: String},    
    category: { type: String},
    description: { type: String},
    createdBy: { type: String},
    createdDate: { type: String},
    updatedBy: { type: String},    
    updatedDate: { type: String}
});

mongoose.model('Task', TaskSchema);