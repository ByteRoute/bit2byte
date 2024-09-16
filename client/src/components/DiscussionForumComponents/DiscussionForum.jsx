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

  const addQuestion = (text) => {
    setQuestions([
      ...questions,
      {
        id: questions.length + 1,
        text,
        replies: [],
      },
    ]);
  };

  const addReply = (questionId, replyText) => {
    const username = prompt("Enter your name:");
    const profilePicture = prompt("Enter your profile picture URL:");

    setQuestions(
      questions.map((q) =>
        q.id === questionId
          ? {
              ...q,
              replies: [
                ...q.replies,
                { username, profilePicture, text: replyText },
              ],
            }
          : q
      )
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold text-blue-700 mb-6 text-center">
        Discussion Forum
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h2 className="text-xl font-semibold text-blue-600 mb-4">
          Post a New Question
        </h2>
        <button
          onClick={() => addQuestion(prompt("Enter your question:"))}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Add Question
        </button>
      </div>
      {questions.map((question) => (
        <Question key={question.id} question={question} addReply={addReply} />
      ))}
    </div>
  );
};

export default DiscussionForum;