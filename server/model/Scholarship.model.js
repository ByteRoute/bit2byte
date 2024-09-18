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
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
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
      category: {
        type: String,
        enum: ["educational", "personal"]
      }
    },
  ],
  eligibility: {
    eligiblecourse: {
      type: String,
      required: true,
    },
    MinimumGPA: {
      type: Number,
      required: true,
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
    otherdetails: {
      type: String,
    },
  },
  status: {
    type: String,
    enum: ["approved", "disapproved", "pending"],
    default: "pending",
    required: true,
  },
});
const Scholarship = mongoose.model("Scholarship", scholarshipSchema);
module.exports = Scholarship;
