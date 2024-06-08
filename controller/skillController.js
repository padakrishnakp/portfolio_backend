 const skill = require('../module/skillModule')
 
 
 
 const skillAdd = async (req, res, next) => {
    try {
        const newSkill = await skill.create({
            title: req.body.title,
            skills: req.body.skills,
            status:req.body.status,
            user_id:req.body.userId
        });
        res.status(200).json({
            success: true,
            message: "Skill added successfully",
            data: newSkill
        });
    } catch (error) {
        console.error("Error adding skill:", error);
        res.status(500).json({
            success: false,
            message: "Error adding skill",
            error: error.message
        });
    }
}
const skillHomeView = async (req,res)=>{
    try
    {
        console.log("USER ID:_",req.params.user_id)
        const skillHome = await skill.findOne({user_id:req.params.user_id,status:true})
        res.status(200).json({
            success: true,
            message: "Skill Home VIew",
            data: skillHome
        });

    }catch(e)
    {
        res.status(500).json({
            success:false,
            message:e
        })
    }
}

const skillList = async(req,res)=>{
   try{

    const skill_list = await skill.find({user_id:req.params.user_id})
    res.status(200).json({
        success:true,
        skill_list:skill_list
  })
   }catch(e)
   {
    res.status(500).json({
        success:false,
        message:e
    })
   }
}
const skillView = async(req,res)=>{
    try{
       let skill_view = await skill.find({_id:req.params.id})
       res.status(200).json({
        success:true,
        skill_view:skill_view
       })

    }catch(e)
    {
        res.status(201).json({
            success:false,
            skill_view:e
           })

    }
}

const skillDelete = async (req,res)=>{
    try
    {
        let skill_delete = await skill.findByIdAndDelete(req.params.id)
       res.status(200).json({
        success:true,
        message:"Skill Delete Successfully"
    })
    }
    catch(e)
    {
        res.status(201).json({
            success:false,
            message:e
        })

    }

}
const skillUpdated = async (req,res)=>{
    try {
        const updated_data = {
            $set: {
                title: req.body.title,
                skills: req.body.skills,
                status:req.body.status, 
            }
          };
          
          const skillUpdated = await skill.findByIdAndUpdate(req.params.id, updated_data, { new: true });
          res.status(200).json({
            success: true,
            message: "Skill Updated successfully",
        });



    }catch(e)
    {
        res.status(201).json({
            success:false,
            error_message:e
        })
    }
}


module.exports = {skillAdd,skillList,skillView,skillDelete,skillUpdated,skillHomeView};