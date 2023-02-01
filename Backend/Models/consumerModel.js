const mongoose = require("mongoose")

const consumerSchema = new mongoose.Schema({
  consumerId: {
    type: Number,
    required: true,
  },

  consumerName: {
    type: String,
    required: true,
  },
});

const consumer = mongoose.model("CONSUMER" , consumerSchema);

module.exports = consumer;
