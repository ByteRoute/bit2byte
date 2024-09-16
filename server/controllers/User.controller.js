// controllers/adminController.js
const User = require("../model/User.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const catchAsync = require("../util/catchAsync");

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
    console.log(user.password)
    console.log(password)

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

module.exports = {
    registerUser, loginUser, test, logout
};
