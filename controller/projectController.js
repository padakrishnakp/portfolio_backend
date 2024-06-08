
// projectController.js

const project = require("../module/projectModule");

const projectAdd = async (req, res) => {
  try {
    const formData = req.body;
    const uploadedFile = req.file; 
    const newProject = await project.create({
      project_name: req.body.project_name,
      project_description: req.body.project_description,
      project_url: formData.project_url,
      project_image: uploadedFile ? uploadedFile.path : '', 
      status: req.body.status,
      user_id:req.body.userId
      
    });

    res.status(200).json({
      success: true,
      message: "Project Created Successfully",
      data: newProject
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to create project",
      error: error.message
    });
  }
};

const projectList = async(req,res)=>{
  try{

    let list_data = await project.find()
    res.status(200).json({
      success:true,
      message:"Project List Successfully",
      list_data:list_data
    })

  }catch(e)
  {
    res.status(500).json({
      success: false,
      message: "Failed to create project",
      error: e
    });
  }
  }

  const projectDelete = async(req,res)=>{
    try{
      let deleteSuccessful = await project.findByIdAndDelete(req.params.id)
      res.status(200).json({
        success:true,
        message:"Project Delete Successfully",
      })

    }catch(e)
    {
      res.status(500).json({
        success: false,
        message: "Failed to create project",
        error: e
      });
    }
    }

    const projectView = async(req,res)=>{
      try{
        let view_data  = await project.find({status:true})
        res.status(200).json({
          success:true,
          message:"Project view Successfully",
          view_list:view_data
        })

      }catch(e)
      {
        console.log("EEE",e)
        res.status(500).json({
          success: false,
          message: "Failed to create project",
          error: e
        });
      }
    }

    const projectDetails = async (req,res)=>{

      try{
        let data = await  project.findById(req.params.id)
        res.status(200).json({
          success:true,
          message:"Project view Successfully",
          data:data
        })

      }catch(e)
      {
        console.log("EEE",e)
        res.status(500).json({
          success: false,
          message: "Failed to create project",
          error: e
        });
      }

    }

    const projectUpdated = async (req, res) => {
      try {
        console.log("Body:-",req.body)
          const { id } = req.params;
          const { project_name, project_description, project_url } = req.body;
          const updateData = {
              project_name,
              project_description,
              project_url
          };
          console.log("File:-",req.file)
          if (req.file) {
              updateData.Project_image = req.file.path;
          }
          const project = await project.findByIdAndUpdate(id, updateData, { new: true });
          if (!project) {
              return res.status(404).json({ success: false, message: "Project not found" });
          }
          res.status(200).json({ success: true, message: "Project updated successfully", data: project });
      } catch (error) {
          res.status(500).json({ success: false, message: "Server Error", error: error.message });
      }
  };

module.exports = { projectAdd,projectList,projectDelete,projectView,projectDetails,projectUpdated };
