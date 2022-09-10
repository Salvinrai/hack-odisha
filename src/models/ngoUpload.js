//requiremnets -------------------require



const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const async = require('hbs/lib/async');
const jwt =require('jsonwebtoken');
const res = require('express/lib/response');

// schema --------------for message in mainpage
const ngoData = new  mongoose.Schema({
 email : {
     type:String,
     required:true
 },
 nid : {
   type:String,
   required:true,
   unique:true
},
class : {
   type:Number
  
},
subject :{
    type:String
   
},
created : {
   type:String
},
topic :{
    type: String
}
})

// create a collection regarding your ngo data uploadtion

const registerP = new mongoose.model("NGO_uploadtion",ngoData);

module.exports = registerP;
