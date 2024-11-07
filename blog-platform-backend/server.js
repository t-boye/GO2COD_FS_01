require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// MongoDB Connection
const uri = process.env.MONGO_URI;

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
 console.log("MongoDB connected");
 app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
 });
})
.catch(err => console.error("MongoDB connection error:", err));