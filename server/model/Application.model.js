const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema({
  scholarshipId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Scholarship",
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  status: {
    type: String,
    enum: ["Approved", "Pending", "Declined"],
    default: "Pending",
  },
  dateApplied: {
    type: Date,
    default: Date.now(),
  },
  timeline: [
    {
      type: String,
    },
  ],
  chatId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  data: {
    documents: [{ name: String, link: String }],
  },
});

applicationSchema.pre("save", async function (next) {
  //create a link for all the  documents uploaded by the student
  try {
    if (this.data.documents.length == 0) {
      throw new Error("No documents uploaded");
    }
    const updatedDocuments = await Promis.all(
      this.data.documents.map(async (document) => {
        const Link = await generatelink(
          this.studentId,
          this.scholarshipId,
          document.name
        );
        return {
          name: document.name,
          link: Link,
        };
      })
    );
    this.data.documents = updatedDocuments;
    next(); //saving model
  } catch (e) {
    next(error);
  }
});
async function generatelink(studenid, scholarshipid, document) {
  return `http://link:${studentid}:${scholarshipid}?${document}`;
}

const Application = mongoose.model("Applications", applicationSchema);
module.exports = Application;