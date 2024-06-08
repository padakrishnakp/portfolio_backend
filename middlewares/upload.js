const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
  cloud_name: 'dnav0zbv2',
  api_key: '147525939995887',
  api_secret: 'FhNbAkcihRF-g3Bdyx6y21RSp5Q',
  secure: true,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'about_images', 
    format: async (req, file) => 'png', 
    public_id: (req, file) => `${file.fieldname}-${Date.now()}` 
  }
});

const uploads = multer({ storage: storage });

module.exports = { uploads };
