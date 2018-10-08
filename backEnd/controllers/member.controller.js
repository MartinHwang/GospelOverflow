const mongoose = require('mongoose');
var ObjectId = require('mongoose').Types.ObjectId;

const Member = mongoose.model('Member');

module.exports.getMemberAll = (req, res, next) => {
    Member.find((err, members) => {
        if(err) return next(err);
        res.json(members);
    });
}

module.exports.getThreeMembers = (req, res, next) => {
    Member.find((err, members) => {
        if(err) return next(err);
        res.json(members);
    }).sort({createdDate: 'descending'}).limit(3);
}

// // Getting user by email
// module.exports.getUserByEmail = function(email, callback){
//     const query = { email: email }
//     User.findOne(query, callback);
// }

module.exports.getMember = (req, res) => {
    const email = req.params.email;
    const query = { email : email };
    // const id = req.params.id;
    // const query = { _id : id };

    //console.log("getMember1: "+req.params.id);

    // if(!ObjectId.isValid(req.params.id)){
    //     return res.status(404).send(`No record with given _id: ${req.params.id}`);
    // }
    //console.log("getMember2: "+req.params.id);
    Member.findOne(query, (err, member) => {
        if(err) throw err;

        //console.log("member: "+JSON.stringify(member));

        if(!member){
            return res.json({success: false, msg: 'Email not found'});
        } else {
            res.json({
                success: true,
                member: {
                    _id: member._id,
                    firstName: member.firstName,
                    lastName: member.lastName,
                    gender: member.gender,    
                    birth: member.birth,    
                    email: member.email,
                    phone: member.phone,
                    cellphone: member.cellphone,
                    address: member.address,
                    postalCode: member.postalCode,
                    job: member.job,
                    workplace: member.workplace,
                    position: member.position,
                    serviceDept: member.serviceDept,
                    serviceGroup: member.serviceGroup,
                    comment: member.comment,
                    createdDate: member.createdDate,
                    modifiedDate: member.modifiedDate
                }
            });            
        }        
    });
}



// module.exports.getMember = (req, res) => {
//     console.log("getMember: "+req.params.id);
//     const id = req.params.id;
//     const query = { _id : id };
//     if (!ObjectId.isValid(req.params.id))
//         return res.status(400).send(`No record with given id : ${req.params.id}`);

//     Member.findById(query, (err, doc) => {

//         console.log("doc: "+JSON.stringify(doc));

//         if (!err) { res.send(doc); }
//         else { console.log('Error in Retriving Member :' + JSON.stringify(err, undefined, 2)); }
//     });
// }


module.exports.addMember = (req, res, next) => {
    var newMember = new Member();
    newMember.firstName = req.body.firstName,
    newMember.lastName = req.body.lastName,
    newMember.gender = req.body.gender,    
    newMember.birth = req.body.birth,    
    newMember.email = req.body.email,
    newMember.phone = req.body.phone,
    newMember.cellphone = req.body.cellphone,
    newMember.address = req.body.address,
    newMember.postalCode = req.body.postalCode,
    newMember.job = req.body.job,
    newMember.workplace = req.body.workplace,
    newMember.position = req.body.position,
    newMember.serviceDept = req.body.serviceDept,
    newMember.serviceGroup = req.body.serviceGroup,
    newMember.comment = req.body.comment,
    newMember.createdDate = new Date(Date.now()).toLocaleString(),
    newMember.modifiedDate = new Date(Date.now()).toLocaleString()

    newMember.save( (err, doc) => {
        if(!err){
            res.send(doc);
            //console.log("doc: "+doc);
        } else {
            if(err.code == 11000){
                res.status(422).send(['Duplicate Member.']);
            } else {
                console.log("err: "+err);
                return next(err);
            }
        }
    });
}

module.exports.editMember = (req, res) => {    
    if(!ObjectId.isValid(req.params.id)){
        return res.status(404).send(`No record with given _id: ${req.params.id}`);
    }

    var member = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gender: req.body.gender,    
        birth: req.body.birth,    
        email: req.body.email,
        phone: req.body.phone,
        cellphone: req.body.cellphone,
        address: req.body.address,
        postalCode: req.body.postalCode,
        job: req.body.job,
        workplace: req.body.workplace,
        position: req.body.position,
        serviceDept: req.body.serviceDept,
        serviceGroup: req.body.serviceGroup,
        comment: req.body.comment,        
        modifiedDate: new Date(Date.now()).toLocaleString()
    }

    //console.log("member: "+JSON.stringify(member));
    Member.findByIdAndUpdate(req.params.id, { $set: member }, { new: true }, (err, doc) => {
        if(!err){
            res.send(doc);
        } else {
            res.send({success: false, msg: 'Failed to update member.'});
        }
    });
}

module.exports.deleteMember = (req, res) => {
    if(!ObjectId.isValid(req.params.id)){
        return res.status(404).send(`No record with given _id: ${req.params.id}`);
    }

    Member.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err){
            res.send(doc);
        } else {
            res.send({success: false, msg: 'Failed to delete member.'});
        }
    });
}

