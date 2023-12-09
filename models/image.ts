const mongoose = require('mongoose');
const User = require('@/models/user');

const imageSchema = new mongoose.Schema({
  filename: String,
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },

});

const imageModel = mongoose.models.Image || mongoose.model('Image', imageSchema);

export default imageModel
