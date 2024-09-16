const mongoose = require("mongoose");
const { Schema } = mongoose;
const helper = new Schema({

  query: {
    type: String,
  },
  helper:{
    Timings:{
      type: String,
    },
    users:[
      
      {
        userid:mongoose.Schema.ObjectId,
        applicationid:mongoose.Schema.ObjectId,
        status:{
          type:String,
          default:'pending',
          enum:['pending','ressolve']
        }
      }
    ]
  }

});
const Helper = mongoose.model("Helper", helper);
module.exports = Helper;
