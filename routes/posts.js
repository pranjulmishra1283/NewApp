const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  postText: {
    type: String,
    required: true,
    trim: true
  },
  user : {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'

  },
  createdAt: {
    type: Date,
    default: Date.now // Automatically sets the current date and time
  },
  likes: {
    type: Array,
    default: [], // Default number of likes is 0
  },
});

module.exports  = mongoose.model('Post', postSchema);