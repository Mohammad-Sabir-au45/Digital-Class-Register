const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },

})

const UserModel = mongoose.model('Users', userSchema)
module.exports = UserModel