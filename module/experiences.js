const mongoose = require("mongoose");



const experiencesSchema = new mongoose.Schema({
    company_name: {type: String},
    roll:{type:String},
    joying_dated:{type:Date},
    last_dated:{type:Date},

    status:{type:Boolean},
    created_at:{type:Date,default:Date.now()},
    updated_at:{type:Date,default:Date.now()}
   
});


module.exports = mongoose.model("experiences", experiencesSchema); 
