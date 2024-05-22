const mongoose = require("mongoose");



const skillSchema = new mongoose.Schema({
    title: {type: String},
    skills:{type:Array},
    status:{type:Boolean},
    created_at:{type:Date,default:Date.now()}
   
});


module.exports = mongoose.model("skill", skillSchema); 
