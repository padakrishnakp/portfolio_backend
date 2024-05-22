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
            status:req.body.status

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
    let list_data = await experiences.find()
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

module.exports = {experiencesAdd ,experiencesList,experiencesDelete,experiencesView};