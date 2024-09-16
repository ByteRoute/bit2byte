import React, { useState } from "react";
import Reply from "./Reply";

const Question = ({ question, addReply }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <p className="text-gray-800 mb-4">{question.text}</p>
      <button
        onClick={() => setShowReplyForm(!showReplyForm)}
        className="bg-blue-600 text-white py-1 px-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 mb-4"
      >
        {showReplyForm ? "Hide Reply Form" : "Reply"}
      </button>
      {showReplyForm && (
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm mb-4">
          <button
            onClick={() => addReply(question.id, prompt("Enter your reply:"))}
            className="bg-blue-600 text-white py-1 px-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Add Reply
          </button>
        </div>
      )}
      <div className="mt-4">
        {question.replies.map((reply, index) => (
          <Reply
            key={index}
            username={reply.username}
            profilePicture={reply.profilePicture}
            text={reply.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Question;
