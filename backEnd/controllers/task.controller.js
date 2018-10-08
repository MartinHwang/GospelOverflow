const mongoose = require('mongoose');
const ObjectId = require('mongoose').Types.ObjectId;

const Task = mongoose.model('Task');

module.exports.getTaskAll = (req, res) => {
    console.log('Get request for all Tasks');
    const daily = 'Daily';
    // Task.find( (err, tasks) => {
    //     if(err){
    //         console.log('Error retrieving tasks'); 
    //     } else {
    //         res.send(tasks);
    //     }
    // });

    Task.find({category:daily}, (err, tasks) => {
        if(err){
            console.log('Error retrieving tasks'); 
        } else {
            res.send(tasks);
        }
    });    
}

module.exports.getTasks = (req, res) => {
    const categoryVal = req.params.category;
    //console.log('categoryVal: '+categoryVal);

    Task.find({category : categoryVal}, (err, tasks) => {
        if(err){
            console.log('Error retrieving tasks'); 
        } else {
            res.send(tasks);
        }
    });    
}

module.exports.addTask = (req, res, next) => {
    console.log('Register a Task');

    var newTask = new Task();
    newTask.title = req.body.title;
    newTask.name = req.body.name;
    newTask.startDate = req.body.startDate;
    newTask.endDate = req.body.endDate;
    newTask.category = req.body.category;
    newTask.description = req.body.description;
    createdDate = new Date(Date.now()).toLocaleString();
    updatedDate = new Date(Date.now()).toLocaleString();


    newTask.save( (err, task) => {
        if(err){
            console.log("Fail to add Task");
            return next(err);
        } else {
            res.json(task);
        }
    });
}