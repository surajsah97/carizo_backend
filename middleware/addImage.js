const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const multer = require("multer");

cloudinary.config({ 
  cloud_name: 'decuk9d45', 
  api_key: '175764149275238', 
  api_secret: 'MUET4ACWhNT7g3GG0BkU5SNceSQ' 
});
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "DEV",
  }
});

console.log("==-=---------------------");



  
  const upload = multer({ storage: storage });
  module.exports=upload;