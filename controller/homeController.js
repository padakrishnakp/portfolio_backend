const home  = require('../module/homeModule')
var geoip = require('geoip-lite');
const { ObjectId } = require('mongodb');

const homeAdd = async (req,res)=>{
    try{
        
        console.log("Body Home add",req.body)

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

        const homeView = await home.find({user_id:req.params.userId,status:true})
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
const homeUpdated = async (req, res) => {
    try {      
      const updated_data = {
        $set: {
          description: req.body.description,
          status: req.body.status,
          input_typing: req.body.input_typing 
        }
      };
      
      const homeUpdated = await home.findByIdAndUpdate(req.params.id, updated_data, { new: true });
      
      if (!homeUpdated) {
        return res.status(404).json({ success: false, message: "Home not found" });
      }
      
      res.status(200).json({ success: true, message: "Home Updated Successfully", data: homeUpdated });
    } catch (e) {
      console.error("Error updating home:", e);
      res.status(500).json({ success: false, error: e.message });
    }
  };
  


module.exports = {homeAdd,homeView,homeDelete,homeList,homeDetails,homeUpdated};



