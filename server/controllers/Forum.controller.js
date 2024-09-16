const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const Question = require("./models/Question");

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.DATABASE; // Update with your MongoDB URI

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/questions", async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/questions", async (req, res) => {
  try {
    const { text } = req.body;
    const newQuestion = new Question({ text });
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/questions/:id/replies", async (req, res) => {
  try {
    const { id } = req.params;
    const { username, profilePicture, text } = req.body;
    const question = await Question.findById(id);
    if (!question) return res.status(404).json({ error: "Question not found" });

    question.replies.push({ username, profilePicture, text });
    await question.save();
    res.status(201).json(question);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
