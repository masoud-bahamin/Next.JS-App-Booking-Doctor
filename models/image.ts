// models/Image.js
const mongoose = require('mongoose');
const Doctor = require('@/models/doctor');
const User = require('@/models/user');

const imageSchema = new mongoose.Schema({
  filename: String,
  path: String,
  doctorId: {
    type: mongoose.Types.ObjectId,
    ref: "Doctor",
  },
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },

});

const imageModel = mongoose.models.Image || mongoose.model('Image', imageSchema);

export default imageModel
