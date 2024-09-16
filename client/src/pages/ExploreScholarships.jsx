import React from "react";
import ScholarshipFilter from "../components/ScholarshipFilter.jsx";
import ScholarshipCard from "../components/ScholarshipCard.jsx";

const ExploreScholarships = () => {


    const scholarships = [
        {
            "title": "National Merit-Based Scholarship",
            "description": "A scholarship for students demonstrating excellent academic performance and pursuing undergraduate or postgraduate studies.",
            "deadline": {
                "startDate": "2024-08-01T00:00:00Z",
                "endDate": "2024-10-15T23:59:59Z"
            },
            "eligibility": {
                "eligiblecourse": "Bachelors",
                "MinimumGPA": 3.5,
                "nationality": "Indian",
                "state": "Maharashtra",
                "category": "General",
                "otherdetails":
                    "No other government scholarships allowed."
            }
        },
        {
            "title": "SC/ST Postgraduate Scholarship",
            "description": "Financial assistance for SC/ST students enrolled in postgraduate programs to support their higher education.",
            "deadline": {
                "startDate": "2024-09-01T00:00:00Z",
                "endDate": "2024-11-30T23:59:59Z"
            },
            "eligibility": {
                "eligiblecourse": "Masters",
                "MinimumGPA": 3.0,
                "nationality": "Indian",
                "state": "Uttar Pradesh",
                "category": "SC",
                "otherdetails": "Annual family income should be less than 2.5 lakhs."
            }
        }
    ]


    return (
        <div className="flex justify-center align-middle items-center">
            <div className="w-full max-w-[1400px]">
                <div className="p-2"><ScholarshipFilter/></div>
                <div className="mt-6">{scholarships.map(s => <ScholarshipCard scholarship={s}/>)}</div>
            </div>
        </div>
    );
};

export default ExploreScholarships;
