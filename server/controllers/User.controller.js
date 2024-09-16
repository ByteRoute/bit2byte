// controllers/adminController.js
const User = require("../model/User.model");
const Chat = require("../model/Chat.model");
const Helper = require("../model/Helper.model");
const Scholarship = require("../model/Scholarship.model");
const Application=require("../model/Application.model")
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const catchAsync = require("../util/catchAsync");
const {sendMessage} = require("./Chat.contoller");

// Register User
const registerUser = catchAsync(async (req, res) => {
    console.log("Inside register user");

    const {
        phone, email, firstName, lastName, password, passwordConfirm, address, city, state, pincode, aadharNumber
    } = req.body;


    // Check if the user already exists by email or phone
    const userExists = await User.findOne({$or: [{email}, {phone}, {aadharNumber}]});
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
        firstName, lastName, email, phone, password: hashedPassword,  // Save the hashed password
        address, city, state, pincode, aadharNumber,
    });


    // Save user in the database
    await user.save();

    //we are using cookies to store jwt, do not send jwt in response.
    const token = jwt.sign({id: user._id}, process.env.SECRET_KEY, {expiresIn: "100h"});
    const options = {
        expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), httpOnly: true, secure: false,
    };

    res.cookie("jwt", token, options);

    res.status(201).json({
        status: "success", data: {user: {...(user._doc), password: undefined}}
    });

});


const loginUser = catchAsync(async (req, res) => {
    console.log("inside user login");
    console.log(req.body);


    const {email, firstName, lastName, password} = req.body;


    // Check if the admin exists
    if (!email || !firstName || !lastName || !password) {
        return res.status(404).json({message: "Details are not provided"});
    }

    const user = await User.findOne({email});
    if (!user) {
        return res.status(404).json({message: "User not found"});
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
        return res.status(400).json({message: "Invalid password"});
    }


    //we are using cookies to store jwt, do not send jwt in response.
    const token = jwt.sign({id: user._id}, process.env.SECRET_KEY, {expiresIn: "100h"});
    const options = {
        expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), httpOnly: true, secure: false,
    };

    res.cookie("jwt", token, options);

    res.status(200).json({
        status: "success", data: {user: {...user._doc, password: undefined}}
    });

});

//test function
const test = catchAsync(async (req, res) => {

    let token = req.cookies.jwt;

    res.status(200).json({
        status: 'success',
        token
    })

});

const logout = catchAsync(async (req, res) => {
    const options = {
        expires: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), httpOnly: true, secure: false,
    }

    res.cookie("jwt", "", options).json({
        status: "success", message: "cookie deleted"
    })

})


//Applied Scholarship

const ApliedScholarship = async (req, res) => {
    console.log("inside applied scholarship");
    const {
        scholorshipId,
        studentId,
        status,
        dateApplied,
        data,
        timeline,
        chatId,
    } = req.body;
    try {
        const user = await User.findById(studentId);
        const scholarship = await Scholarship.findById(scholorshipId);
        if (!user || !scholarship) {
            return res.status(404).json({ message: "User or scholarship not found" });
        }

        const newApplication= new Application({
            scholorshipId,
            studentId,
            status,
            dateApplied,
            data,
            timeline,
            chatId
        })

        await newApplication.save();
        return res.send(200).json({ message: "Application submitted successfully",
            newApplication
        });

    } catch (e) {
        console.error("Error submitting application:", e);
        return res
            .status(500)
            .json({ message: "Error submitting application", error: e.message });
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
    registerUser, loginUser, test, logout, sendMessage, ApliedScholarship
};
