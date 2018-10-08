const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;

const Event = mongoose.model('Event');

module.exports.getEventAll = (req, res) => {
    console.log('Get request for all Events');

    Event.find( (err, events) =>{
        if(err){
            console.log('Error retrieving events'); 
        } else {
            res.send(events);
        }
    });
}

module.exports.getEvent = (req, res) => {
    if(!ObjectId.isValid(req.params.id)){
        return res.status(404).send(`No record with given _id: ${req.params.id}`);
    }

    const id = req.params.id;

    Event.findById(id, (err, event) => {
        if(err) throw err;

        if(!event){
            return res.json({success: false, msg: 'Event not found'});
        } else {
            res.json({
                success: true,
                event: {
                    _id: event._id,                    
                    contactPerson: event.contactPerson,
                    email: event.email,
                    cellphone: event.cellphone,
                    category: event.category,
                    title: event.title,
                    eventDate: event.eventDate,
                    description: event.description,
                    createdBy: event.createdBy,
                    createdDate: event.createdDate
                }
            });  
        }
    });
}

module.exports.addEvent = (req, res, next) => {
    console.log('Register a Event');

    var newEvent = new Event();
    newEvent.contactPerson = req.body.contactPerson;
    newEvent.email = req.body.email;
    newEvent.cellphone = req.body.cellphone;
    newEvent.category = req.body.category;
    newEvent.title = req.body.title;
    newEvent.eventDate = req.body.eventDate;
    newEvent.description = req.body.description;
    newEvent.createdBy = req.body.contactPerson;
    newEvent.createdDate = new Date(Date.now()).toLocaleString();

    newEvent.save( (err, addEvent ) => {
        if(err){
            console.log("Fail to add Event");
            return next(err);
        } else {
            res.json(addEvent);
        }
    });
}

module.exports.updateEvent = (req, res, next) => {
    console.log('Update the video');

    if(!ObjectId.isValid(req.params.id)){
        return res.status(404).send(`No record with given _id: ${req.params.id}`);
    }

    var event = {
        contactPerson: req.body.contactPerson,
        email: req.body.email,
        cellphone: req.body.cellphone,
        category: req.body.category,
        title: req.body.title,
        eventDate: req.body.eventDate,
        description: req.body.description
    }

    Event.findByIdAndUpdate( req.params.id, {$set: event}, {new: true}, (err, updatedEvent) => {
        if(err){
            return next(err);
        } else {
            res.json(updatedEvent);
        }
    });
}

module.exports.deleteEvent = (req, res, next) => {
    console.log('Delete the video');

    if(!ObjectId.isValid(req.params.id)){
        return res.status(404).send(`No record with given _id: ${req.params.id}`);
    }

    Event.findByIdAndRemove(req.params.id, (err, deletedEvent) => {
        if(err){ 
            res.send({success: false, msg: 'Failed to delete member.'});
        } else {
            res.send(deletedEvent);
        }
    });
}
