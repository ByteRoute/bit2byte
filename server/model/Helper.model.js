// const mongoose = require("mongoose");
// const { Schema } = mongoose;
// const helper = new Schema({

//   query: {
//     type: String,
//   },
//   helper:{
//     Timings:{
//       type: String,
//     },
//     users:[
//       {
//         userid:mongoose.Schema.ObjectId,
//         applicationid:mongoose.Schema.ObjectId,
//         status:{
//           type:String,
//           default:'pending',
//           enum:['pending','ressolve']
//         }
//       }
//     ]
//   }

// });
// const Helper = mongoose.model("Helper", helper);
// module.exports = Helper;



const mongoose = require("mongoose");
const { Schema } = mongoose;

const helperSchema = new Schema({
  query: {
    type: String,
    required: true,  // Describes what the helper is assisting with
  },
  timings: {
    type: String,  // Helper's available timings
  },
  users: [
    {
      userid: {
        type: mongoose.Schema.ObjectId,
        ref: 'User'  // Reference to User
      },
      applicationId: {
        type: mongoose.Schema.ObjectId,
        ref: 'Application'  // Link to an application if necessary
      },
      status: {
        type: String,
        default: 'pending',
        enum: ['pending', 'resolve']
      }
    }
  ]
});

const Helper = mongoose.model("Helper", helperSchema);
module.exports = Helper;
