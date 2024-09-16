const crypto = require("crypto");
const mongoose = require("mongoose");
const validator = require("validator"); //provides various schema validators
const bcryptjs = require("bcryptjs");

const userSchema = new mongoose.Schema({
    phone: {
        type: String, required: [true, "Phone number is must"], unique: true,
    }, email: {
        type: String,
        required: true,
    }, firstName: {
        type: String,
        required: true,

    }, lastName: {
        type: String,
        required: true,
    },emailVerificationOtp: {
        type: String, 
        select: false,
        expires: 300
    }, password: {
        type: String, 
        required:true, 
    }, passwordConfirm: {
        type: String, 
        // required: true, 
        validate: {
            // This work on SAVE!!
            validator: function (el) {
                return el === this.password;
            }, 
            message: "Passwords are not the same!",
        },
    }, passwordChangedAt: {
        type: Date,
    }, 
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pincode: {
        type: String,
        required: true
    },
    aadharNumber: {
        type: String, // You can use String to handle leading zeroes (if any)
        required: true,
        unique: true, // Ensures no duplicate Aadhar numbers
        validate: {
          validator: function(v) {
            return /^\d{12}$/.test(v); // Regular expression to match exactly 12 digits
          },
          message: props => `${props.value} is not a valid Aadhar number!`
        }
      },
      appliedScholarships: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Scholarship",
        }
      ],
    passwordResetToken: String, 
    passwordResetExpires: Number,
     active: Boolean
});


const User = mongoose.model("User", userSchema);
module.exports = User;
