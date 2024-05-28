// routes/images.js
const express = require('express');
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const Image = require('../models/Image');

const router = express.Router();

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'demttcs7n',
  api_key: '682115842716422', 
  api_secret: 'zak3MXm9sL0vpJrvx1HvdA9pud8',
});

const storage = multer.diskStorage({});
const upload = multer({ storage });

router.post('/', upload.array('images', 3), async (req, res) => {
  try {
    const uploadedImages = [];

    for (const file of req.files) {
      const result = await cloudinary.uploader.upload(file.path);
      uploadedImages.push({
        url: result.secure_url,
      });
    }

    const { name, description } = req.body;

    const newImage = new Image({
      name,
      description,
      images: uploadedImages,
    });

    const savedImage = await newImage.save();
    res.json(savedImage);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.get('/', async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) {
      return res.status(404).json({ message: 'Image not found' });
    }
    res.json(image);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = router;
