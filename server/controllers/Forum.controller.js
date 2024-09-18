const express = require("express");
const cors = require("cors");
const Question = require("./models/Question");

exports.getQuestions = async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.postQuestion = async (req, res) => {
  try {
    const { text } = req.body;
    const newQuestion = new Question({ text });
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.addReply = async (req, res) => {
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
};
