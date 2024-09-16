// controllers/adminController.js
const User = require("../model/User.model");
const Chat = require("../model/Chat.model")
const Helper = require("../model/Helper.model")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Register User
const registerUser = async (req, res) => {
  console.log("Inside register user");

  const { phone, email, firstName, lastName, password, passwordConfirm, address, city, state, pincode, aadharNumber } = req.body;

  try {
    // Check if the user already exists by email or phone
    const userExists = await User.findOne({ $or: [{ email }, { phone }, { aadharNumber }] });
    if (userExists) {
      return res.status(400).json({
        message: "User with this email or phone number already exists",
      });
    }

    // Check if the passwords match
    if (password !== passwordConfirm) {
      return res.status(400).json({
        message: "Passwords do not match",
      });
    }

    // Generate salt and hash the password
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    // Create a new user
    const user = new User({
      firstName,
      lastName,
      email,
      phone,
      password: hashedPassword,  // Save the hashed password
      address,
      city,
      state,
      pincode,
      aadharNumber,
    });

    // Save user in the database
    await user.save();

    res.status(201).json({
      message: "User registered successfully",
      user: {
        id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phone: user.phone,
        aadharNumber: user.aadharNumber
      },
    });
  } catch (error) {
    console.error("Server error", error);
    res.status(500).json({ message: "Server error" });
  }
};


// Admin Login
const loginUser = async (req, res) => {
  console.log("inside user login");
  console.log(req.body);
  
  
  const { email, firstName, lastName, password } = req.body;

  try {
    // Check if the admin exists
    if (!email || !firstName || !lastName || !password) {
      return res.status(404).json({ message: "Details are not provided" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(user.password)
    console.log(password)

    if (!isMatch) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Create JWT token
    // console.log(process.env.SECRET_KEY)
    // const token = jwt.sign({ id: user._id }, process.env.SECRET_KEY, { expiresIn: "1h" });



    res.status(200).json({
      user,
      message: "Login user successfully",
      // token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

// const sendMessage = async(req, res) => {
//   const { userId, helperId, applicationNo, content } = req.body;

//   try {
//     // Validate user
//     const user = await User.findById(userId);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     // Validate helper
//     const helper = await Helper.findById(helperId);
//     if (!helper) {
//       return res.status(404).json({ message: 'Helper not found' });
//     }

//     // Check if a chat already exists between the user and the helper
//     let chat = await Chat.findOne({ student: userId, helper: helperId, applicationNo });

//     if (!chat) {
//       // Create a new chat if not found
//       chat = new Chat({
//         student: userId,
//         helper: helperId,
//         applicationNo,
//         messages: []
//       });
//     }

//     // Add the new message to the chat
//     const newMessage = {
//       sender: userId,
//       senderModel: 'User',
//       content,
//       timestamp: Date.now()
//     };

//     chat.messages.push(newMessage);

//     // Save the updated chat
//     await chat.save();

//     res.status(200).json({
//       message: 'Message sent successfully',
//       chat
//     });

//   } catch (error) {
//     console.error('Error sending message:', error);
//     res.status(500).json({ message: 'Server error' });
//   }
// }

module.exports = {
  registerUser,
  loginUser,
  sendMessage
};
