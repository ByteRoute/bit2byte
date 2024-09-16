const Chat = require("../model/Chat.model.js");
const User = require("../model/User.model.js");
const Helper = require("../model/Helper.model.js");

const createChat = async (req, res) => {
  const { applicationId, helperId, userId } = req.body;

  try {
    // Validate the user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Validate the helper
    const helper = await Helper.findById(helperId);
    if (!helper) {
      return res.status(404).json({ message: "Helper not found" });
    }

    // Check if the chat already exists
    let chat = await Chat.findOne({
      student: userId,
      helper: helperId,
      applicationNo: applicationId
    });

    if (chat) {
      return res.status(200).json({
        message: "Chat already exists",
        chat
      });
    }

    // Create a new chat
    chat = new Chat({
      student: userId,
      helper: helperId,
      applicationNo: applicationId,
      messages: []
    });

    // Save the new chat
    await chat.save();

    return res.status(201).json({
      message: "Chat created successfully",
      chat
    });
  } catch (error) {
    console.error("Error creating chat:", error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createChat,
};
