const Chat = require("../model/Chat.model");
const User = require("../model/User.model");
const Helper = require("../model/Helper.model");

// Create a new chat or return existing one
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
    return res.status(500).json({ message: "Server error" });
  }
};

// Send a message in a chat
const sendMessage = async (req, res) => {
  const { chatId, senderId, senderModel, content } = req.body;

  try {
    // Check if the chat exists
    const chat = await Chat.findById(chatId);
    if (!chat) {
      return res.status(404).json({ message: "Chat not found" });
    }

    // Validate senderModel
    if (!['User', 'Helper'].includes(senderModel)) {
      return res.status(400).json({ message: "Invalid sender type" });
    }

    // Validate the sender (User or Helper)
    let sender;
    if (senderModel === 'User') {
      sender = await User.findById(senderId);
    } else if (senderModel === 'Helper') {
      sender = await Helper.findById(senderId);
    }

    if (!sender) {
      return res.status(404).json({ message: "Sender not found" });
    }

    // Create the new message object
    const newMessage = {
      sender: senderId,
      senderModel,
      content,
      timestamp: Date.now()
    };

    // Add the message to the chat's message array
    chat.messages.push(newMessage);

    // Save the chat with the new message
    await chat.save();

    return res.status(200).json({
      message: "Message sent successfully",
      newMessage // Optionally, return only the new message
    });
  } catch (error) {
    console.error("Error sending message:", error);
    return res.status(500).json({ message: "Server error" });
  }
};


// Fetch the chat history
const getChatHistory = async (req, res) => {
    const { chatId } = req.params;
  
    try {
      // Find the chat by ID and populate student and helper details (if needed)
      const chat = await Chat.findById(chatId)
        .populate('student', 'name') // You can choose the fields you want to populate
        .populate('helper', 'name'); // Same for helper
  
      if (!chat) {
        return res.status(404).json({ message: "Chat not found" });
      }
  
      return res.status(200).json({
        message: "Chat history fetched successfully",
        chat
      });
    } catch (error) {
      console.error("Error fetching chat history:", error);
      return res.status(500).json({ message: "Server error" });
    }
  };
  
  module.exports = {
    createChat,
    sendMessage,
    getChatHistory,  // Add this to your exports
  };
  

module.exports = {
  createChat,
  sendMessage,
  getChatHistory
};
