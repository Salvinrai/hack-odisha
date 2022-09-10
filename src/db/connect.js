const mongoose =require("mongoose");

mongoose.connect('mongodb://localhost:27017/IC_hack')
.then(()=> {console.log("sucessfull connected");})
.catch((err)=> console.log(err));