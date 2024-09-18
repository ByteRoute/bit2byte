const crypto = require("crypto");
const mongoose = require("mongoose");

const moderatorSchema = new mongoose.Schema({
    approvedScholarships: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Scholarship"
        }
    ],
    disapprovedScholarships: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Scholarship"
        }
    ]


})

const Moderator = mongoose.model("Moderator", moderatorSchema);
module.exports = Moderator;
