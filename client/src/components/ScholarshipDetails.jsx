import React from "react";

// dummy data
const scholarship = {
  title: "National Merit-Based Scholarship",
  description:
    "A scholarship for students demonstrating excellent academic performance and pursuing undergraduate or postgraduate studies.",
  deadline: {
    startDate: "August 1, 2024",
    endDate: "October 15, 2024",
  },
  requireddocuments: [
    {
      name: "Marksheet of last qualifying exam",
      document: "pdf",
      documentSize: 1024,
    },
    { name: "Passport-size photograph", document: "jpg", documentSize: 512 },
    { name: "Income certificate", document: "pdf", documentSize: 2048 },
  ],
  eligibility: {
    eligiblecourse: "Bachelors",
    MinimumGPA: 3.5,
    nationality: "Indian",
    state: "Maharashtra",
    category: "General",
    otherdetails: "No other government scholarships allowed.",
  },
};

// ScholarshipDetails component
const ScholarshipDetails = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-blue-50 rounded-lg shadow-lg">
      <h1 className="text-3xl font-semibold text-blue-700 text-center mb-6">
        Scholarship Details
      </h1>
      <div className="bg-white p-6 rounded-lg border border-blue-300">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">
          {scholarship.title}
        </h2>
        <p className="text-gray-700 mb-4">
          <strong>Description:</strong> {scholarship.description}
        </p>

        <p className="text-blue-600 font-semibold mt-4">
          <strong>Deadline:</strong>
        </p>
        <ul className="list-disc list-inside pl-5 mb-4">
          <li>
            Start Date:{" "}
            {new Date(scholarship.deadline.startDate).toLocaleDateString()}
          </li>
          <li>
            End Date:{" "}
            {new Date(scholarship.deadline.endDate).toLocaleDateString()}
          </li>
        </ul>

        <p className="text-blue-600 font-semibold mt-4">
          <strong>Required Documents:</strong>
        </p>
        <ul className="list-disc list-inside pl-5 mb-4">
          {scholarship.requireddocuments.map((doc, docIndex) => (
            <li key={docIndex}>
              {doc.name} ({doc.document.toUpperCase()}, Max size:{" "}
              {doc.documentSize / 1024}MB)
            </li>
          ))}
        </ul>

        <p className="text-blue-600 font-semibold mt-4">
          <strong>Eligibility:</strong>
        </p>
        <ul className="list-disc list-inside pl-5 mb-4">
          <li>Eligible Course: {scholarship.eligibility.eligiblecourse}</li>
          <li>Minimum GPA: {scholarship.eligibility.MinimumGPA}</li>
          <li>Nationality: {scholarship.eligibility.nationality}</li>
          <li>State: {scholarship.eligibility.state}</li>
          <li>Category: {scholarship.eligibility.category}</li>
          <li>Other Details: {scholarship.eligibility.otherdetails}</li>
        </ul>

        <div className="flex justify-around mt-6">
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            onClick={() => handleDiscussion(scholarship.title)}
          >
            Go to Discussion Forum
          </button>
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            onClick={() => handleApply(scholarship.title)}
          >
            Apply New
          </button>
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            onClick={() => handleRenew(scholarship.title)}
          >
            Renew All
          </button>
        </div>
      </div>
    </div>
  );
};

// Placeholder functions for button actions
const handleDiscussion = (title) => {
  alert(`Redirecting to discussion forum for ${title}`);
};

const handleApply = (title) => {
  alert(`Redirecting to apply page for ${title}`);
};

const handleRenew = (title) => {
  alert(`Redirecting to renew page for ${title}`);
};

export default ScholarshipDetails;
