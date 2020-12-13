const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    min: 1,
    max: 50,
  },
  lastName: {
    type: String,
    required: true,
    min: 1,
    max: 50,
  },
  email: {
    type: String,
    required: true,
    max: 50,
  },
  password: {
    type: String,
    required: true,
  },
  token: {
    type: String,
    default: '',
  },
});

exports.User = mongoose.model('users', userSchema);