const home  = require('../module/homeModule')
var geoip = require('geoip-lite');
const { ObjectId } = require('mongodb');

const homeAdd = async (req,res)=>{
    try{
        
        const newHome = await home.create({
            user_id:req.user,
            description:req.body.description,
            input_typing:req.body.input_typing,
            status:req.body.status
        })
        res.status(200).json({
            success:true,
            message:"Home Created Successfully",
                  data:newHome
        })

    }catch(e)
    {
        res.status(500).json({
            success:false,
            message:e
        })
    }
}


const homeList = async (req,res)=>{
    try{
        const list_data = await home.find({user_id:req.user})
        res.status(200).json({
            success:true,
            data:list_data
        })

    }catch(e)
    {
        res.status(500).json({
            success:false,
            message:e
        })
    }
}

const homeDelete = async (req,res)=>{
    try{
        const homeDelete = await home.findByIdAndDelete(req.params.id)
        res.status(200).json({
            success:true,
            message:"Home deleted Successfully"
        })

    }catch(e)
    {
        res.status(500).json({
            success:false,
            message:e
        })
    }
}

const homeView = async (req,res)=>{
    try{
        var ip = "103.211.135.104";
        var geo = geoip.lookup(ip);
      console.log(geo);

        const homeView = await home.find({user_id:req.user,status:true})
        res.status(200).json({
            success:true,
            data:homeView
        })

    }catch(e)
    {
        res.status(500).json({
            success:false,
            message:e
        })
    }
}

const homeDetails = async (req,res)=>{
    try{

        let details = await home.findOne({_id:req.params.id})
        req.res.status(200).json({
            success:true,
            data:details
        })
    }catch(e)
    {
        res.status(500).json({
            success:false,
            error:e
        })
    }

}
const homeUpdated  = async (req,res)=>{
    try {
        var updated_data = {
            description:req.body.description,
            input_typing:req.body.input_typing,
            status:req.body.status
        }
        const homeUpdated = await home.findByIdAndUpdate(req.body.id,updated_data)
        res.status(200).json({success:true,message:"Home Updated Successfully"})


    }catch(e)
    {
        res.status(500).json({success:false,error:e})
    }

}


module.exports = {homeAdd,homeView,homeDelete,homeList,homeDetails,homeUpdated};



