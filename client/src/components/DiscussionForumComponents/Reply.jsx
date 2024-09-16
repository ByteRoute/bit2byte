import React from "react";

const Reply = ({ username, profilePicture, text }) => {
  return (
    <div className="flex items-start bg-gray-100 p-4 rounded-lg shadow-sm mb-2">
      <img
        src={profilePicture}
        alt={`${username}'s profile`}
        className="w-10 h-10 rounded-full mr-4"
      />
      <div>
        <p className="font-semibold text-blue-600">{username}</p>
        <p className="text-gray-700 mt-1">{text}</p>
      </div>
    </div>
  );
};

export default Reply;
