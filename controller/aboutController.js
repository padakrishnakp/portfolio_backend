const About = require("../module/aboutModule");

const aboutAdd = async (req, res) => {
  try {
    const { description, status } = req.body;
    const uploadedFile = req.file;  
    const aboutData = new About({
      description: description,
      about_video_path: uploadedFile.path,
      user_id:req.body.userId, 
      status: status === 'true',
    });

    let data=await aboutData.save();

    res.status(200).json({ success: true, data: aboutData });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'Failed to upload file' });
  }
};

const aboutList = async (req, res) => {
  try {
    let list_data = await About.find();
    res.status(200).json({
      success: true,
      message: "About List",
      list_data: list_data,
    });
  } catch (err) {
    res.status(201).json({
      success: false,
      message: err,
    });
  }
};

const aboutView = async (req, res) => {
  try {
    let aboutData = await About.findOne({_id:req.params.id});
    res.status(200).json({
      success: true,
      message: "About View",
      data: aboutData,
    });
  } catch (e) {
    res.status(201).json({
      success: false,
      message: e,
    });
  }
};
const aboutHomeDetails = async (req,res)=>{
  try
  {
    let details = await About.findOne({user_id:req.params.userId,status:true})
    res.status(200).json({
      success: true,
      message: "About Home View",
      data: details,
    });

  }catch(er)
  {
    res.status(201).json({
      success: false,
      message: e,
    });
  }
}
const aboutDelete = async (req, res) => {
  try {
    console.log("Param:-", req.params.id);
    let delete_data = await About.findByIdAndDelete(req.params.id);
    console.log("delete_data:-", delete_data);
    res.status(200).json({
      success: true,
      message: "Delete Successfully",
    });
  } catch (er) {
    res.status(201).json({
      success: false,
      message: er,
    });
  }
};

const aboutUpdated = async (req, res) => {
  try {
    const { description, status } = req.body;
    const uploadedFile = req.file;

    const updateData = {
      description,
      status: status === 'true',
    };

    if (uploadedFile) {
      updateData.about_video_path = uploadedFile.path;
    }

    const updatedAbout = await About.findByIdAndUpdate(req.params.id, updateData, { new: true });

    if (!updatedAbout) {
      return res.status(404).json({ success: false, message: 'About not found' });
    }

    res.status(200).json({ success: true, data: updatedAbout });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = { aboutAdd, aboutList, aboutDelete, aboutView,aboutUpdated ,aboutHomeDetails};
