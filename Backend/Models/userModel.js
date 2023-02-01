const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  age: {
    type: Number,
    required: true,
  },

  nickName: {
    type: String,
    required: true,
  }
});

const User = mongoose.model("USER" , userSchema);

module.exports = User;