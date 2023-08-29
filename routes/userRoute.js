const express = require('express');
const user = express();
const userCtl = require('../controllers/UserCtl')
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');

user.use(bodyParser.urlencoded({extended:true})); 
user.use(express.static(path.resolve(__dirname,'public')));

var storage = multer.diskStorage({
    destination:(req,file,cb) =>{
        cb(null,'./public/uploads')
    },
    filename:(req,file,cb) =>{
        cb(null,file.originalname)
    }
})

var upload = multer({storage:storage})
user.post('/importUser',upload.single('file'),userCtl.importUser);
user.get('/exportUser',userCtl.exportUser);


module.exports = user;