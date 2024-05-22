 const skill = require('../module/skillModule')
 
 
 
 const skillAdd = async (req, res, next) => {
    try {
        const newSkill = await skill.create({
            title: req.body.title,
            skills: req.body.skills,
            status:req.body.status
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

const skillList = async(req,res)=>{
   try{

    const skill_list = await skill.find()
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
       let skill_view = await skill.find({status:true})
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


module.exports = {skillAdd,skillList,skillView,skillDelete};