

import React, { useEffect, useState } from "react";

function ScholarshipForm() {
    // State to track the active tab
    const [activeTab, setActiveTab] = useState("personal");

    useEffect(() => {
        console.log(activeTab);
    }, [activeTab]);

    // Handle tab click
    const handleTabClick = (tab) => {
        console.log("Tab clicked");
        setActiveTab(tab);
        console.log(`Tab switched to: ${tab}`); // Debugging line to check tab switch
    };

    return (
        <div className="flex justify-center items-center border border-black p-6">
            <div className="flex flex-col lg:flex-row max-w-[1400px] w-full">
                <div className="w-full lg:w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white mb-6">
                        Scholarship Form
                    </h5>

                    {/* Tabs */}
                    <div className="tabs">
                        <div className="flex border-b border-gray-200">
                            {/* Tab Buttons */}
                            <button
                                className={`tab-button ${activeTab === "personal" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"} cursor-pointer py-2 px-4`}
                                onClick={() => handleTabClick("personal")}
                            >
                                Personal Details
                            </button>
                            <button
                                className={`tab-button ${activeTab === "academic" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"} cursor-pointer py-2 px-4`}
                                onClick={() => handleTabClick("academic")}
                            >
                                Academic Details
                            </button>
                            <button
                                className={`tab-button ${activeTab === "education" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"} cursor-pointer py-2 px-4`}
                                onClick={() => handleTabClick("education")}
                            >
                                Education Details
                            </button>
                            <button
                                className={`tab-button ${activeTab === "scholarship" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"} cursor-pointer py-2 px-4`}
                                onClick={() => handleTabClick("scholarship")}
                            >
                                Scholarship Details
                            </button>
                        </div>
                        {/* <div><h1>ehisdik</h1></div> */}

                        {/* Tab Content */}
                        <div className="mt-4">
                            {/* <div><h1>WHAT'S UP</h1></div> */}
                            {activeTab === "personal" && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {/* Personal Details Fields */}
                                    <div>
                                        <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            id="firstName"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            placeholder="John"
                                            required
                                        />
                                    </div>
                                    {/* Add other personal details fields here */}
                                </div>
                            )}

                            {activeTab === "academic" && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {/* Academic Details Fields */}
                                    <div>
                                        <label htmlFor="currentCourse" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Current Course
                                        </label>
                                        <input
                                            type="text"
                                            name="currentCourse"
                                            id="currentCourse"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            placeholder="e.g., Bachelors in Computer Science"
                                            required
                                        />
                                    </div>
                                    {/* Add other academic details fields here */}
                                </div>
                            )}

                            {activeTab === "education" && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {/* Education Details Fields */}
                                    <div>
                                        <label htmlFor="schoolName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            School Name
                                        </label>
                                        <input
                                            type="text"
                                            name="schoolName"
                                            id="schoolName"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            placeholder="XYZ School"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="degree" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Degree
                                        </label>
                                        <input
                                            type="text"
                                            name="degree"
                                            id="degree"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            placeholder="e.g., High School Diploma"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="graduationYear" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Graduation Year
                                        </label>
                                        <input
                                            type="number"
                                            name="graduationYear"
                                            id="graduationYear"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            placeholder="2025"
                                            required
                                        />
                                    </div>
                                    {/* Add other education details fields here */}
                                </div>
                            )}

                            {activeTab === "scholarship" && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {/* Scholarship Details Fields */}
                                    <div>
                                        <label htmlFor="scholarshipName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Scholarship Name
                                        </label>
                                        <input
                                            type="text"
                                            name="scholarshipName"
                                            id="scholarshipName"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            placeholder="XYZ Scholarship"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Amount
                                        </label>
                                        <input
                                            type="number"
                                            name="amount"
                                            id="amount"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            placeholder="5000"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="grantingOrganization" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            Granting Organization
                                        </label>
                                        <input
                                            type="text"
                                            name="grantingOrganization"
                                            id="grantingOrganization"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                            placeholder="ABC Foundation"
                                            required
                                        />
                                    </div>
                                    {/* Add other scholarship details fields here */}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ScholarshipForm;
