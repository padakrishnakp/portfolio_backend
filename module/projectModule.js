const mongoose = require("mongoose");



const projectSchema = new mongoose.Schema({
    project_name: {type: String},
    project_description:{type:String},
    project_url:{type:String},
    project_image:{type:String},
    status:{type:Boolean},
    created_at:{type:Date,default:Date.now()},
    updated_at:{type:Date,default:Date.now()}
   
});


module.exports = mongoose.model("project", projectSchema); 
