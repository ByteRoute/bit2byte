const mongoose = require("mongoose");
const { Schema } = mongoose;
const scholarshipSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  deadline: {
    startDate: Date,
    endDte: Date,
    required: true,
  },
  requireddocuments: [
    {
      document: {
        type: String,
        enum: ["pdf", "docx", "jpg"],
        required: true,
      },
      documentSize: {
        type: Number,
      },
      name: {
        type: String,
        required: true,
      },
    },
  ],
  eligibility: {
    eligiblecourse: {
      type: String,
      required: true,
    },
    MinimumGPA: {
      type: Number,
      requred: true,
    },
    nationality: {
      type: String,
    },
    state: {
      type: String,
    },
    category: {
      type: String,
      enum: ["General", "SC", "ST", "OBC", "Other"],
    },
    othedetails: {
      type: String,
    },
  },
});
const Scholarship = mongoose.model("Scholarship", scholarshipSchema);
module.exports = Scholarship;
