var mongoose = require("mongoose");

var BarSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  tags: {
    type: String,
    required: false
  },
  imageURL: {
    type: String,
    required: false
  },
  notes: {
    type: string,
    required: false
  },
  hours: {
    type: string,
    required: false
  }
})

var Bar = mongoose.model("Bar", BarSchema);

module.exports = Bar;
