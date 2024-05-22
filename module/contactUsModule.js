const mongoose = require("mongoose");



const contactUsSchema = new mongoose.Schema({
    name: {type: String},
    email:{type:String},
    message:{type:String},
    created_at:{type:Date,default:Date.now()},
    updated_at:{type:Date,default:Date.now()}
   
});


module.exports = mongoose.model("contactUs", contactUsSchema); 
