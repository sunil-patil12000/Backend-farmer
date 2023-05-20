let mongoose = require('mongoose')
const ad = mongoose.Schema({
    email:{
        type:String,

        required:true
    },
    password:{
        type:String,
        required:true
        },
},{timestamps:true})

module.exports=mongoose.model('admin',ad);
