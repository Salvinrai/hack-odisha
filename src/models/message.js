//requiremnets -------------------require



const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const async = require('hbs/lib/async');
const jwt =require('jsonwebtoken');
const res = require('express/lib/response');

// schema --------------for message in mainpage
const message = new  mongoose.Schema({
 name : {
     type:String,
     required:true
 },
 email : {
   type:String,
   required:true,
  
},
phone : {
   type:Number,
   required:true,
   
},
message :{
    type:String,
    required : true,
}
})

// create a collection regarding your patient registration

const registerP = new mongoose.model("message",message);

module.exports = registerP;
