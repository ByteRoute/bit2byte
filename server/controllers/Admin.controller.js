// controllers/adminController.js
const Admin = require("../model/Admin.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

// Register Admin
const registerAdmin = async (req, res) => {
  console.log("Inside register admin");
  const { firstName, lastName, email, phone, password, passwordConfirm } =
    req.body;

  try {
    // Check if the admin already exists by email or phone
    const adminExists = await Admin.findOne({ $or: [{ email }, { phone }] });
    if (adminExists) {
      return res.status(400).json({
        message: "Admin with this email or phone number already exists",
      });
    }
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync("B4c0//", salt);
    // Create a new admin
    const admin = new Admin({
      firstName,
      lastName,
      email,
      phone,
      password,
      passwordConfirm,
    });

    // Save admin in the database
    await admin.save();

    res.status(201).json({
      message: "Admin registered successfully",
      admin: {
        id: admin._id,
        firstName: admin.firstName,
        lastName: admin.lastName,
        email: admin.email,
        phone: admin.phone,
      },
    });
  } catch (error) {
    console.error("a", error);
    res.status(500).json({ message: "Server error" });
  }
};

// Admin Login
const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the admin exists
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Create JWT token
    console.log(process.env.SECRET_KEY)
      const token = jwt.sign( { id: admin._id }, process.env.SECRET_KEY, { expiresIn: "1h" } );



    res.status(200).json({
      admin,
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  registerAdmin,
  loginAdmin,
};