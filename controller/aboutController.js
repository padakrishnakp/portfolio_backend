const about = require("../module/aboutModule");

const aboutAdd = async (req, res) => {
  const formData = req.body;
  const uploadedFile = req.file;
  console.log("uploading file", uploadedFile);
  console.log("formData file", formData);
  return false;
};


const aboutList = async (req, res) => {
  try {
    let list_data = await about.find();
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
    let aboutData = await about.findOne({ status: true });
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
const aboutDelete = async (req, res) => {
  try {
    console.log("Param:-", req.params.id);
    let delete_data = await about.findByIdAndDelete(req.params.id);
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

module.exports = { aboutAdd, aboutList, aboutDelete, aboutView };
