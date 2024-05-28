const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const modelRoutes = require('./routes/modelRoutes');
const imagesRouter = require('./routes/Image');
const cors = require('cors');


dotenv.config(); 

const app = express();
app.use(cors());


mongoose.connect(process.env.MONGODB_URI, {})
.then(() => {
  console.log('Connected to MongoDB Atlas');
})
.catch((error) => {
  console.error('Error connecting to MongoDB Atlas:', error.message);
});



app.use(express.json());

app.use('/api/models', modelRoutes);
app.use('/api/images', imagesRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
