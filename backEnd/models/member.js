const mongoose = require('mongoose');

// User Schema
const MemberSchema = mongoose.Schema({
    firstName: { type: String }, 
    lastName:{ type: String }, 
    gender: { type: String },    
    birth: { type: String },    
    email: { type: String },
    phone: { type: String },
    cellphone: { type: String }, 
    address: { type: String },
    postalCode: { type: String },
    job: { type: String },
    workplace: { type: String },
    position: { type: String }, 
    serviceDept: { type: String },
    serviceGroup: { type: String },
    comment: { type: String },
    createdDate: { type: String },
    modifiedDate: { type: String }
});

mongoose.model('Member', MemberSchema);
