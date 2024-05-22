const contactUs = require("../module/contactUsModule");

const contactUsAdd = async (req, res) => {
  try {
    let addData = await contactUs.create({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });
    res.status(200).json({
      success: true,
      message: "ContactUs add successfully",
      data: addData,
    });
  } catch (error) {
    console.error("Error creating new about:", error);
    res
      .status(500)
      .json({ success: false, message: "Error creating new about" });
  }
};


const contactUsList = async (req, res) => {
  try {
    let list_data = await contactUs.find().sort({created_at:-1})
    res.status(200).json({
      success: true,
      message: "Contact us List",
      list_data: list_data,
    });
  } catch (err) {
    res.status(201).json({
      success: false,
      message: err,
    });
  }
};


const contactUsDelete = async (req, res) => {
  try {
    let delete_data = await contactUs.findByIdAndDelete(req.params.id);
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

module.exports = { contactUsAdd, contactUsList, contactUsDelete};
