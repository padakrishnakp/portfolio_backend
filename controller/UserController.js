const User = require('../module/UserModule.js');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { fromTheme } = require('tailwind-merge');

const userRegistration = async (req, res) => {
  try {
    let email_check = await User.findOne({ email_id: req.body.email_id });
    if (email_check) {
      return res.status(401).json({
        success: false,
        message: "User Email is already registered"
      });
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    let addData = await User.create({
      user_name: req.body.user_name,
      email_id: req.body.email_id,
      password: hashedPassword
    });
    res.status(200).json({
      success: true,
      message: "User Registration Successfully Added",
      Registration_data: addData
    });

  } catch (e) {
    res.status(400).json({
      success: false,
      message: e.message 
    });
  }
};

async function genToken(user){
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  return token;
}

const userLogin = async (req, res) => {
  try {
    let user = await User.findOne({ email_id: req.body.email_id });
    console.log("user:", user);

    if (!user) {
      console.log("User not found for email:", req.body.email_id);
      return res.status(401).json({
        success: false,
        message: "Invalid Email Id"
      });
    }

    const passwordMatch = await bcrypt.compare(req.body.password, user.password);
    if (!passwordMatch) {
      console.log("Invalid password for user:", req.body.email_id);
      return res.status(401).json({
        success: false,
        message: "Invalid Password"
      });
    }
    const token=await genToken(user)
    let updated = await User.updateOne({email_id: req.body.email_id},{token:token})
    console.log("updated:-",updated)


    console.log("Generated token:", token);

   

    res.status(200).json({
      success: true,
      userDetails: {
        _id: user._id,
        user_name: user.user_name,
        email_id: user.email_id,
        created_at: user.created_at,
        updated_at: user.updated_at
      }
    });



  } catch (error) {
    console.error("An error occurred during login:", error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};

module.exports = { userLogin };


const userView = async (req,res)=>{
  try
  {
    let userDetails = await User.findById(req.params.id)
    res.status(200).json({
      success:true,
      userDetails:userDetails
    })

  }catch(e)
  {
    res.status(404).json({
      success:false,
      error:e
    })
  }
}

const userUpdated = async (req,res)=>{
  try{
    const formData = req.body;
  const uploadedFile = req.file; 
  const parsedSessionData = JSON.parse(formData. sessionUserData);
    const userId = parsedSessionData._id;
    let updatedProfile = await User.findByIdAndUpdate(userId,{
      user_name:formData.user_name,
      phone_number:formData.phone_number,
      facebook_link:formData. facebook_link,
      instagram_link:formData.instagram_link,
      profile_picture:uploadedFile.path
    })
    res.status(200).json({
      success:true,
      message:"Profile updated successfully"
    })
  }
  catch(e)
  {
    res.status(404).json({
      success:false,
      error:e
    })
  }
}
const userToken = (req, res) => {
  res.status(200).json({
    success: true,
    user: req.user
  });
};


module.exports = { userRegistration,userLogin,userUpdated,userView,userToken};
