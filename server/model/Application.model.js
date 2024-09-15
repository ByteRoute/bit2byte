const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
    scholarshipId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "Scholarship"
    },
    studentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    data:{
        type: Object
    },
    status:{
        type: String,
        enum : ['Approved','Pending', 'Declined'],
    },
    dateApplied:{
        type: Date,
        default: Date.now()
    },
    timeline:[
        {
            type: String
        }
    ],
    chatId:{
        type:mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
});



const Application = mongoose.model("Applications", applicationSchema);
module.exports = Application;
