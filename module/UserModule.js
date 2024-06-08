const mongoose = require("mongoose");



const UserSchema = new mongoose.Schema({
    user_name: {type: String},
    email_id:{type:String},
    password:{type:String},
    phone_number:{type:String},
    facebook_link:{type:String},
    instagram_link:{type:String},
    profile_picture:{type:String},
    token:{type:String},
    status:{type:Boolean},
    created_at:{type:Date,default:Date.now()},
    updated_at:{type:Date,default:Date.now()}
   
});


module.exports = mongoose.model("User", UserSchema); 
