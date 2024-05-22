const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'dnav0zbv2',
  api_key: '147525939995887',
  api_secret: 'FhNbAkcihRF-g3Bdyx6y21RSp5Q',
  secure: true,
});

// Set up multer storage for handling file uploads to Cloudinary
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'about_images', // Specify the folder where images will be stored on Cloudinary
    format: async (req, file) => 'png', // Optionally, specify the file format (e.g., 'png', 'jpg', etc.)
    public_id: (req, file) => `${file.fieldname}-${Date.now()}` // Specify the public ID of the uploaded file
  }
});

// Initialize multer with Cloudinary storage
const uploads = multer({ storage: storage });

// Export the uploads middleware
module.exports = { uploads };
