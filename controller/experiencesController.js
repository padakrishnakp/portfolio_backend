const experiences = require('../module/experiences')


const experiencesAdd = async (req, res) => {
   try
   {
    const newExperiences = await experiences.create(
        {
            company_name:req.body.company_name,
            roll:req.body.roll,
            joying_dated:req.body.joying_dated,
            last_dated:req.body.last_dated,
            status:req.body.status,
            user_id:req.body.userId

        })
    res.status(200).json({
            success:true,
            message:"Experiences were successfully created",
            data:newExperiences
            })
   }
    catch (error) {
        console.error('Error creating new about:', error);
        res.status(500).json({ success: false, message: 'Error creating new about' });
    }
};

const experiencesList = async(req,res)=>{
   try{
    let list_data = await experiences.find({user_id:req.params.userId})
    res.status(200).json({
        success:true,
        message:"Experiences List",
        list_data:list_data
    })
   }catch(e)
   {
    res.status(500).json({
        success:false,
        message:e
    })
   }
}

const experiencesDelete = async(req,res)=>{
    try{
        let delete_data =await experiences.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success:true,
            message:"Data Delete Successfully"
        })

    }
    catch(e)
    {
        res.status(500).json({
            success:false,
            message:e
        })
    }
}

const experiencesView = async (req,res)=>{
    try{
        let experiences_view = await experiences.find({status:true})
        res.status(200).json({
            success:true,
            message:"Experiences View",
            experiences_view:experiences_view
        })

    }catch(e)
    {
        req.status(500).json({
            success:false,
            message:e
        })
    }
}

const experiencesDetails =  async (req,res)=>{
    try{
        let details_data = await experiences.findById(req.params.id)
        res.status(200).json({
            success:true,
            message:"Experiences Details",
            data:details_data
        })
    }
    catch(e)
    {
        res.status(500).json({
            success:false,
            message:e
        })
    }
}
const experiencesUpdate = async (req,res)=>{
    try {
        let updated_data = {
            company_name:req.body.company_name,
            roll:req.body.roll,
            joying_dated:req.body.joying_dated,
            last_dated:req.body.last_dated,
            status:req.body.status,

        }
        let experiences_update = await experiences.findByIdAndUpdate(req.params.id,updated_data)
        res.status(200).json({
            success:true,
            message:"Successfully Updated Experience"
        })

    }catch(e)
    {
        res.status(500).json({
            success:false,
            message:e
        })
    }

}

module.exports = {experiencesAdd ,experiencesList,experiencesDelete,experiencesView,experiencesDetails,experiencesUpdate};