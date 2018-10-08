const mongoose = require('mongoose');
var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');
var fs = require('fs');
var dateFormat = require('dateformat');

const Gallery = mongoose.model('Gallery');

// Allowed ext
filetypes = /jpeg|jpg|png|gif/;

// Set Storage Engine
var store = multer.diskStorage({    
    destination: './public/uploads/',
    filename:function(req,file,cb){
        const onlyFilename = file.originalname.split('.');
        const today = dateFormat(new Date(), "yyyy-mm-dd");
        //cb(null, file.fieldname +'-'+Date.now() + path.extname(file.originalname));
        cb(null, onlyFilename[0] +'-'+ today + path.extname(file.originalname));
    }
});

// === Without Filtering ===
var upload = multer({
    storage:store,
    limits: { fileSize: 1000000 }    
}).single('imageUrl');

// Only allow Images
// var upload = multer({
//     storage:store,
//     limits: { fileSize: 1000000 },
//     fileFilter: function(req,file,cb){
//         checkFileType(file,cb);
//     }
// }).single('imageUrl');

function checkFileType(file, callback){
    // Allowed ext
    //const filetypes = /jpeg|jpg|png|gif/;

    // check ext
    const extname = this.filetypes.test(path.extname(file.originalname).toLowerCase());

    // check mime
    const mimetype = filetypes.test(file.mimetype);

    if(mimetype && extname){
        return callback(null, true);
    } else {
        callback('Error: Images Only!');
    }
}

function imageUpload(req, res){
    upload(req,res,function(err){
        if(err){            
            //return res.status(501).json({error:err});
            res.send(err);
        }
        //do all database record saving activity
        //res.json({originalname:req.file.originalname});
        //console.log('req.file: '+req.file);
 
        if(req.file == undefined){
            res.send("Error: NO file selected!");
        } else {
            console.log("Uploading successfully");
            //res.send(req.file);            
        }
    });
}

// Init app
const app = express();

// EJS
app.set('view engine', 'ejs');

// public Folder
app.use(express.static('./public'));

// function getImages(callback) {
//     files = [], i;
//     fs.readdir('/public/uploads', function (err, list) {
//         for(i=0; i<list.length; i++) {
//             files.push(list[i]); //store the file name into the array files
//         }
//         callback(err, files);
//     });
// }

// imageDir = path.join(__dirname,'../public/uploads');
// function getImages(imageUrl,callback) {
//     files = [], i;
//     fs.readdir(imageDir, function (err, list) {
//         for(i=0; i<list.length; i++) {
//             if(list === imageUrl)
//             {
//                 files.push(list[i]); //store the file name into the array files
//             }            
//         }
//         callback(err, files);
//     });
// }

imageDir = path.join(__dirname,'../public/uploads');
module.exports.getGalleryAll = (req, res, next) => {
    Gallery.find( (err, images) => {
        if(err){
            return next(err);
        } else {
            // fs.readdir(imageDir, (err, file) => {
            //     if(err){
            //         console.log(err);
            //     } else {
            //         console.log("file: "+file);
            //         // res.writeHead(200,{'Content-type':'image/jpg'});
            //         // res.end(file);
            //         // console.log("images: "+images);
            //         // console.log("images.imageUrl: "+images.imageUrl);
                    
            //     }
            // });            
            res.json(images); 
        }        
    });    
}

module.exports.addGallery = (req, res, next) => {

    filepath = path.join(__dirname,'../public/uploads');
    //imageUpload(req, res);
    upload(req,res,function(err){
        if(err){            
            //return res.status(501).json({error:err});
            res.send(err);
        }
        //do all database record saving activity
        //res.json({originalname:req.file.originalname});
        //console.log('req.file: '+req.file);
 
        if(req.file == undefined){
            res.send("Error: NO file selected!");
        } else {
            console.log("req.file: "+JSON.stringify(req.file));
            var newGallery = new Gallery();
            newGallery.category = req.body.category;
            newGallery.description = req.body.description;
            newGallery.originalImageName = req.file.originalname; 
            newGallery.imageName = req.file.filename;      
            newGallery.imageUrl = filepath +'/'+ req.file.filename;      
            newGallery.createdDate = new Date(Date.now()).toLocaleString();                

            console.log("newGallery.category: "+newGallery.category);
            console.log("newGallery.description: "+newGallery.description);
            console.log("newGallery: "+newGallery);
            
            newGallery.save( (err, doc) => {
                if(!err){
                    console.log("Save Image");
                    //res.send(doc);
                } else {
                    console.log("Fail Image");
                    return next(err);
                }
            });

            console.log("Uploading successfully");
            res.send("req.file: "+req.file);            
        }
    });    
}

module.exports.downloadImage = (req, res, next) => {
    filepath = path.join(__dirname,'../public/uploads') +'/'+ req.body.filename;
    //console.log('filepath: '+filepath);
    res.sendFile(filepath);
}

module.exports.downloadImages = (req, res, next) => {
    filespath = path.join(__dirname,'../public/uploads');
    console.log('filespath: '+filespath);
    res.sendFile(filespath);
}

