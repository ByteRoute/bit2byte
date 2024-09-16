import React, { useState } from "react";
import Question from "./Question";

const DiscussionForum = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: "What is React?",
      replies: [
        {
          username: "JohnDoe",
          profilePicture: "https://via.placeholder.com/40",
          text: "React is a JavaScript library for building user interfaces.",
        },
      ],
    },
    {
      id: 2,
      text: "How does useState work?",
      replies: [
        {
          username: "JaneDoe",
          profilePicture: "https://via.placeholder.com/40",
          text: "useState is a React hook that lets you add state to functional components.",
        },
      ],
    },
  ]);

  const [newQuestionText, setNewQuestionText] = useState(""); // State to manage new question input

  // Function to add a new question
  const addQuestion = () => {
    if (newQuestionText.trim() === "") {
      alert("Question text cannot be empty.");
      return;
    }

    const newQuestion = {
      id: questions.length + 1, // Generate a new id based on length
      text: newQuestionText,
      replies: [],
    };

    setQuestions([...questions, newQuestion]);
    setNewQuestionText(""); // Clear the textarea after submitting
  };

  // Function to add a reply to a specific question
  const addReply = (questionId, replyText) => {
    const username = "JaTin"; // Static username for demonstration

    setQuestions((prevQuestions) =>
      prevQuestions.map((question) =>
        question.id === questionId
          ? {
              ...question,
              replies: [
                ...question.replies,
                {
                  username,
                  profilePicture: "https://via.placeholder.com/40",
                  text: replyText,
                },
              ],
            }
          : question
      )
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold text-blue-700 mb-6 text-center">
        Discussion Forum
      </h1>

      {/* Section to Post a New Question */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">
          Post a New Question
        </h2>
        <textarea
          value={newQuestionText}
          onChange={(e) => setNewQuestionText(e.target.value)}
          placeholder="Enter your question"
          className="w-full p-2 border rounded mb-2"
          rows="4"
        ></textarea>
        <button
          onClick={addQuestion}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Add Question
        </button>
      </div>

      {/* Render the list of questions */}
      {questions.map((question) => (
        <Question key={question.id} question={question} addReply={addReply} />
      ))}
    </div>
  );
};

export default DiscussionForum;
