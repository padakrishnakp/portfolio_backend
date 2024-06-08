const mongoose = require("mongoose");



const aboutSchema = new mongoose.Schema({
    user_id:{type: mongoose.Schema.Types.ObjectId,ref: 'User',required: true},
    description: {type: String},
    about_file:{type:String},
    type:{type:String},
    about_video_path:{type:String},
    status:{type:Boolean},
    created_at:{type:Date,default:Date.now()},
    updated_at:{type:Date,default:Date.now()}
   
});


module.exports = mongoose.model("about", aboutSchema); 
