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

  // Function to add a reply to a specific question
  const addReply = (questionId, replyText) => {
    const username = "JaTin";

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

      {/* Render the list of questions */}
      {questions.map((question) => (
        <Question key={question.id} question={question} addReply={addReply} />
      ))}
    </div>
  );
};

export default DiscussionForum;
