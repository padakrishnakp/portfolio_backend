const mongoose = require("mongoose");



const aboutSchema = new mongoose.Schema({
    description: {type: String},
    about_file:{type:String},
    type:{type:String},
    status:{type:Boolean},
    created_at:{type:Date,default:Date.now()},
    updated_at:{type:Date,default:Date.now()}
   
});


module.exports = mongoose.model("about", aboutSchema); 
