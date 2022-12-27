const mongoose = require('mongoose');
const validator = require('validator');

var studentschema = new mongoose.Schema({
    name:{type:"string",require:true},
    email:{
        type:'string',
        require:true,
        lowercase:true,
        validate:(value)=>{
            return validator.isEmail(true);
        }

    },
    phoneNo:{type:"string",require:true},
    password:{type: Number,require:true},
    role:{type:"string",default:"student"},
    mentor:{type:[]}
})

var mentorschema = new mongoose.Schema({
    name:{type:"string",require:true},
    email:{
        type:'string',
        require:true,
        lowercase:true,
        validate:(value)=>{
            return validator.isEmail(true);
        }

    },
    phoneNo:{type:"string",require:true},
    password:{type: Number,require:true},
    role:{type:"string",default:"student"},
    student:{type:[]}
})

let studentdetails=mongoose.model('student',studentschema)
let mentordetails=mongoose.model('mentor',mentorschema)
module.exports={studentdetails,mentordetails}