// const mongoose = require('mongoose');

// // Define the schema for individual messages
// const messageSchema = new mongoose.Schema({
//   sender: {
//     type: mongoose.Schema.Types.ObjectId,  // Reference to the sender (User or Helper)
//     required: true,
//     refPath: 'senderModel'  // Dynamic reference to either User or Helper model
//   },
//   senderModel: {
//     type: String,
//     required: true,
//     enum: ['User', 'Helper']  // The model name of the sender
//   },
//   content: {
//     type: String,
//     required: true  // Message content
//   },
//   timestamp: {
//     type: Date,
//     default: Date.now  // When the message was sent
//   }
// });

// // Define the chat schema
// const chatSchema = new mongoose.Schema({
//   student: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',  // Reference to the User model (student)
//     required: true
//   },
//   helper: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Helper',  // Reference to the Helper model (helper)
//     required: true
//   },
//   applicationNo: {
//     type: String,
//     required: true  // Store the student's application number
//   },
//   messages: [messageSchema],  // Array of message objects
//   createdAt: {
//     type: Date,
//     default: Date.now  // Timestamp for when the chat started
//   },
//   updatedAt: {
//     type: Date,
//     default: Date.now  // Timestamp for when the chat was last updated
//   }
// });

// // Update `updatedAt` automatically whenever a new message is added
// chatSchema.pre('save', function (next) {
//   this.updatedAt = Date.now();
//   next();
// });

// const Chat = mongoose.model('Chat', chatSchema);

// module.exports = Chat;



const mongoose = require('mongoose');

// Define the schema for individual messages
const messageSchema = new mongoose.Schema({
  sender: {
    type: mongoose.Schema.Types.ObjectId,  // Reference to the sender (User or Helper)
    required: true,
    refPath: 'senderModel'  // Dynamic reference to either User or Helper model
  },
  senderModel: {
    type: String,
    required: true,
    enum: ['User', 'Helper']  // The model name of the sender
  },
  content: {
    type: String,
    required: true  // Message content
  },
  timestamp: {
    type: Date,
    default: Date.now  // When the message was sent
  }
});

// Define the chat schema
const chatSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // Reference to the User model (student)
    required: true
  },
  helper: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Helper',  // Reference to the Helper model (helper)
    required: true
  },
  applicationNo: {
    type: String,
    required: true  // Store the student's application number
  },
  messages: [messageSchema],  // Array of message objects
  createdAt: {
    type: Date,
    default: Date.now  // Timestamp for when the chat started
  },
  updatedAt: {
    type: Date,
    default: Date.now  // Timestamp for when the chat was last updated
  }
});

// Update `updatedAt` automatically whenever a new message is added
chatSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;
