const mongoose = require("mongoose");
const { Schema } = mongoose;

const subjectSchema = new Schema({
  std: {
    type: String,
    required: true,
  },
  subjectCode: {
    type: String,
    required: true,
  },
  subjectName: {
    type: String,
    required: true,
    trim: true,
  },
  totalLectures: {
    type: Number,
    default: 30,
  },
  attendence: {
    type: Schema.Types.ObjectId,
    ref: "attendence",
  },
});

module.exports = mongoose.model("subject", subjectSchema);
