import React from "react";
import {request} from "../requestMethods.js";
import {Link, useLoaderData} from "react-router-dom";

export async function getOrderDetails({params}) {
    const scholarshipId = params.id;
    console.log(scholarshipId)

    let res;

    try {
        res = await request.post("/scholarship/getSpecificScholarship", {
            scholarshipId,
        });
    } catch (e) {
        return {
            status: "fail",
            message: e.response.data.message,
        };
    }

    return res.data;
}

// ScholarshipDetails component
const ScholarshipDetails = () => {

    const scholarship = useLoaderData().data.scholarship;

    return (
        <div className="max-w-[1400px] mx-auto p-6">
            {/*<h1 className="text-3xl font-semibold  mb-6">*/}
            {/*    Scholarship Details*/}
            {/*</h1>*/}
            <div className="bg-white p-6">
                <h2 className="text-blue-800 underline text-2xl font-semibold mb-4">
                    {scholarship.title}
                </h2>
                <p className="text-gray-700 mb-4">
                    <strong>Description:</strong> {scholarship.description}
                </p>

                <p className=" mt-4">
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

                <p className=" mt-4">
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

                <p className=" mt-4">
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

                <div className="flex gap-3 my-16">
                    <Link
                        to={"/discussionForum"}
                        className="btn btn-outline"
                    >
                        Go to Discussion Forum
                    </Link>
                    <button
                        className="btn btn-neutral"
                        onClick={() => handleApply(scholarship.title)}
                    >
                        Apply New
                    </button>
                    <button
                        className="btn btn-neutral"
                        onClick={() => handleRenew(scholarship.title)}
                    >
                        Renewal
                    </button>
                </div>
            </div>
        </div>
    );
};

//placeholder functions
const handleApply = (title) => {
    alert(`Redirecting to apply page for ${title}`);
};

const handleRenew = (title) => {
    alert(`Redirecting to renew page for ${title}`);
};

export default ScholarshipDetails;
