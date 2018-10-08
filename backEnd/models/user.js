const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// User Schema
var UserSchema = new mongoose.Schema({
    name: { 
        type: String,
        required: 'Name can\'t be empty' 
    },
    username: { 
        type: String,
        required: 'Username can\'t be empty'        
    },
    email: { 
        type: String,
        required: 'Email can\'t be empty',
        unique: true 
    },
    password: { 
        type: String,
        required: 'Password can\'t be empty',
        minlength: [4, 'Pasword must be at least 4 character long']
    },
    createdDate: { type: String },
    saltSecret: String 
});

// Events
UserSchema.pre('save', function(next){
    bcrypt.genSalt(10, (err, salt)=> {
        bcrypt.hash(this.password, salt, (err, hash) => {
            if(err) throw err;
            this.password = hash;
            this.saltSecret = salt;
            next();
        });
    });        
});

// Methods
UserSchema.methods.verifyPassword = function(password){
    return bcrypt.compareSync(password, this.password);
};

mongoose.model('User', UserSchema);

