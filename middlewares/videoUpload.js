const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dnav0zbv2',
  api_key: '147525939995887',
  api_secret: 'FhNbAkcihRF-g3Bdyx6y21RSp5Q',
  secure: true,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: async (req, file) => {
    let format = 'mp4'; 
    if (file.mimetype.startsWith('image/')) {
      format = 'jpg'; 
    } else if (file.mimetype.startsWith('video/')) {
      format = 'mp4'; // Ensure this is the correct format for your video
    }
    return {
      folder: 'about_media', 
      resource_type: 'auto', // Allow Cloudinary to automatically detect the resource type
      format: format,
      public_id: `${file.fieldname}-${Date.now()}` 
    };
  },
});

const videoUpload = multer({ storage: storage });

module.exports = { videoUpload };
