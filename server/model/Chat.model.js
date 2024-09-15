const crypto = require("crypto");
const mongoose = require("mongoose");
const { type } = require("os");

const chatSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    helperId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Helper"
    },
    applicationNo: {
        type: String,
    }
});

const Chat = mongoose.model("Chat", chatSchema);
module.exports = Chat;