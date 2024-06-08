const mongoose = require("mongoose");



const experiencesSchema = new mongoose.Schema({
    company_name: {type: String},
    roll:{type:String},
    joying_dated:{type:Date},
    last_dated:{type:Date},
    user_id:{type: mongoose.Schema.Types.ObjectId,ref: 'User',required: true},
    status:{type:Boolean},
    created_at:{type:Date,default:Date.now()},
    updated_at:{type:Date,default:Date.now()}
   
});


module.exports = mongoose.model("experiences", experiencesSchema); 
