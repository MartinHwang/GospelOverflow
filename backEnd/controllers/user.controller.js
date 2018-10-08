const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/dbConfig');
const jwt = require('jsonwebtoken');

const User =  mongoose.model('User');

// module.exports.comparePassword = function(inputedPassword, hash, callback){
//     bcrypt.compare(inputedPassword, hash, (err, isMatch) => {
//         if(err) throw err;
//         callback(null, isMatch);
//     });
// }

// Getting User All
module.exports.getUserAll = (req, res, next) => {    
    User.find((err, users) => {        
        if(err) return next(err);
        res.json(users);
    });
}

// Getting user by ID
// module.exports.getUserById = (id, (req, res, next) => {
//     User.findById(id, (err, user) =>{

//     });
// })

// // Getting user by Username
// module.exports.getUserByUsername = function(username, callback){
//     const query = { username: username }
//     User.findOne(query, callback);
// }

// // Getting user by email
// module.exports.getUserByEmail = function(email, callback){
//     const query = { email: email }
//     User.findOne(query, callback);
// }

// Adding User
module.exports.addUser = (req, res, next) => {
    var newUser = new User();
    newUser.name = req.body.name;
    newUser.username = req.body.username;
    newUser.email = req.body.email;
    newUser.password = req.body.password;
    newUser.createdDate = req.body.createdDate;
    
    newUser.save((err, doc) => {
        if(!err){
            res.send(doc);
        } else {            
            if(err.code == 11000){
                res.status(422).send(['Duplicate Key. Username and Email must be unique.']);
            } else {
                return next(err);
            }
        }
    });
}

// module.exports.authenticate = (req, res, next) => {
//     const email = req.body.email;
//     const password = req.body.password;

//     this.getUserByEmail( email, (err, user) => {
//         if(err) throw err;
//         if(!user){
//             return res.json({success: false, msg: 'Email not found'});
//         }
//         this.comparePassword(password, user.password, (err, isMatch) => {
//             if(err) throw err;
//             if(isMatch){
//                 // const token = jwt.sign(user.toJSON(), config.secret, {
//                 //     expiresIn: 604800 // 1 week
//                 // }); 

//                 res.json({
//                     success: true,
//                     //token: 'JWT '+token,
//                     user: {
//                         id: user._id,
//                         name: user.name,
//                         username: user.username,
//                         email: user.email
//                     }
//                 });
//             } else {
//                 return res.json({success: true, msg: 'Wrong Password'});
//             }
//         });
//     });
// }

module.exports.authenticate = (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;

    const query = { email: email }

    User.findOne( query, (err, user) => {
        if(err) throw err;
        if(!user){
            return res.json({success: false, msg: 'Email not found'});
        }

        bcrypt.compare(password, user.password, (err, isMatch) => {
            if(err) return res.status(400).json(err);
            if(isMatch){
                //1. Using JWT
                const token = jwt.sign(user.toJSON(), config.secret, {
                    //expiresIn: 600 // 10 minutes
                    expiresIn: 3600 // 1 hour
                }); 

                res.json({
                    success: true,
                    token: 'JWT '+token,
                    user: {
                        id: user._id,
                        name: user.name,
                        username: user.username,
                        email: user.email
                    }
                });

                // 2.
                //return res.status(200).json({ "token": user.generateJwt() });

            } else {           
                return res.json({success: false, msg: 'Wrong Password'});
            }
        });
    });
}

// module.exports.getUserProfile = (req, res, next) => {    
//     User.findOne({ _id: req._id },
//         (err, user) => {
//             if(!user){
//                 console.log("!user");
//                 return res.status(404).json({ status: false, message: 'User record not found.' })
//             } else {
//                 console.log("err");
//                 return res.status(200).json({ status: true, user: user });                              
//             }
//         }
//     );
// }   