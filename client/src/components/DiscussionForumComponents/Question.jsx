import React, { useState } from "react";
import Reply from "./Reply";

const Question = ({ question, addReply }) => {
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyText, setReplyText] = useState(""); // State to manage the reply text

  // Handle textarea input change
  const handleReplyChange = (e) => {
    setReplyText(e.target.value);
  };

  // Handle reply submission
  const handleSubmitReply = () => {
    if (replyText.trim() !== "") {
      addReply(question.id, replyText); // Use the reply text entered by the user
      setReplyText(""); // Clear the textarea after submitting
      setShowReplyForm(false); // Hide the reply form after submission
    } else {
      alert("Reply text cannot be empty.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <p className="text-gray-800 mb-4">{question.text}</p>

      {/* Toggle reply form visibility */}
      <button
        onClick={() => setShowReplyForm(!showReplyForm)}
        className="bg-blue-600 text-white py-1 px-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 mb-4"
      >
        {showReplyForm ? "Hide Reply Form" : "Reply"}
      </button>

      {/* Reply Form with Textarea */}
      {showReplyForm && (
        <div className="bg-gray-50 p-4 rounded-lg shadow-sm mb-4">
          <textarea
            value={replyText}
            onChange={handleReplyChange}
            placeholder="Enter your reply"
            className="w-full p-2 border rounded mb-2"
            rows="4"
          ></textarea>
          <button
            onClick={handleSubmitReply}
            className="bg-blue-600 text-white py-1 px-3 rounded-lg hover:bg-blue-700 mt-2"
          >
            Add Reply
          </button>
        </div>
      )}

      {/* Render Replies */}
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
