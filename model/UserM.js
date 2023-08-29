const mongoose = require('mongoose')


const user = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    mobile:{
        type:Number,
        required:true
    },


})

const users = mongoose.model("Users",user) 
module.exports = users;