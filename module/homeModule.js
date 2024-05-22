const mongoose = require("mongoose");



const homeSchema = new mongoose.Schema({
    user_id:{type: mongoose.Schema.Types.ObjectId,ref: 'User',required: true},
    description: {type: String},
    input_typing:{type:Array},
    status:{type:Boolean},
    created_at:{type:Date,default:Date.now()},
    updated_at:{type:Date,default:Date.now()}
   
});


module.exports = mongoose.model("home", homeSchema); 
