import React, { useState } from "react";
import Question from "./Question";

const DiscussionForum = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      text: "How to apply for PMSS scholarship?",
      replies: [
        {
          username: "Vivek Desai",
          profilePicture: "https://ui-avatars.com/api/?name=Vivek+Desai",
          text: "You can directly go on portal and login to begin your process, enter all the details and you are good to go",
        },
        {
          username: "Arpit Bharadwaj",
          profilePicture: "https://ui-avatars.com/api/?name=Vivek+Desai",
          text: "yes I also had the same doubt, thanks for solving",
        },
      ],
    },
    {
      id: 2,
      text: "What is the probability that i will be allocated this scholarship, I am 26 male, from UP?",
      replies: [
        {
          username: "JaneDoe",
          profilePicture: "https://ui-avatars.com/api/?name=John+Doe",
          text: "useState is a React hook that lets you add state to functional components.",
        },
      ],
    },
  ]);

  const addQuestion = (text) => {
    // not adding if the size of text is zero
    if (text.length == 0) return;
    setQuestions([
      ...questions,
      {
        id: questions.length + 1,
        text,
        replies: [],
      },
    ]);
  };
  const name = "Hariom Joshi";
  const addReply = (questionId, replyText) => {
    const username = prompt("Enter your name:");
    const nameArr = name.split(" ");
    const profilePicture =
      "https://ui-avatars.com/api/?name=" + nameArr[0] + "+" + nameArr[1];
    if (
      replyText.length == 0 ||
      username.length == 0 ||
      profilePicture.length == 0
    )
      return;
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
