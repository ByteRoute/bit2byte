import React from "react";
import ScholarshipFilter from "../components/ScholarshipFilter.jsx";
import ScholarshipCard from "../components/ScholarshipCard.jsx";
import {useLoaderData} from "react-router-dom";
import {request} from "../requestMethods.js";

export async function getAllScholarships() {
    let res;

    try {
        res = await request.get("/scholarship/getAllScholarships");
    } catch (e) {
        return {
            status: "fail",
            message: e.response.data.message,
        };
    }

    return res.data;
}


const ExploreScholarships = () => {

    const scholarships = useLoaderData().data.scholarships;

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
