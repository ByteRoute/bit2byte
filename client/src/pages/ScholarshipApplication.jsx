import React, { useState } from "react";

function ScholarshipForm() {
    // Define scholarship object
    // this type of object will come from the api
    const scholarship = {
        identificationDetails: [
            { name: "Aadhar", type: "file", size: "80mb" },
            { name: "Photo", type: "file", size: "80mb" },
            { name: "Pancard", type: "file", size: "50mb" },
            { name: "Passport", type: "file", size: "100mb" },
        ],
        educationalDetails: [
            { name: "10th Grade Marksheet", type: "file", size: "60mb" },
            { name: "12th Grade Marksheet", type: "file", size: "60mb" },
            { name: "Degree Certificate", type: "file", size: "100mb" },
            { name: "Diploma Certificate", type: "file", size: "100mb" },
        ],
        scholarshipDetails: [
            { name: "Scholarship Letter", type: "file", size: "50mb" },
            { name: "Scholarship ID", type: "text", size: "30mb" },
            { name: "Granting Organization", type: "text", size: "50mb" },
        ],
        financialDetails: [
            { name: "Bank Statement", type: "file", size: "200mb" },
            { name: "Income Tax Return", type: "file", size: "150mb" },
            { name: "Form 16", type: "file", size: "100mb" },
        ],
        residenceDetails: [
            { name: "Electricity Bill", type: "file", size: "50mb" },
            { name: "Rent Agreement", type: "file", size: "100mb" },
            { name: "Gas Connection Bill", type: "file", size: "30mb" },
        ],
        healthDetails: [
            { name: "Medical Report", type: "file", size: "100mb" },
            { name: "Vaccination Certificate", type: "file", size: "50mb" },
            { name: "Disability Certificate", type: "file", size: "100mb" },
        ],
    };


    // // Get category names (e.g., 'identificationDetails', 'educationalDetails')
    const categories = Object.keys(scholarship);

    // console.log(categories);

    // State to track the active tab
    const [activeTab, setActiveTab] = useState(categories[0]);

    // Handle tab click
    const handleTabClick = (tab) => {


        setActiveTab(tab);
    };

    return (
        // <div className="flex justify-center items-center border border-black p-6">
        //     <div className="flex flex-col lg:flex-row max-w-[1400px] w-full">
        <div className="flex justify-center align-middle items-center ">
            <div className="flex flex-col lg:flex-row max-w-[1400px] w-full">
                <div className="hidden lg:block w-1/2 p-4">
                    <img src="https://placehold.co/600x300" alt="Signup" className="w-full my-2 object-contain" />
                    <img src="https://placehold.co/600x300" alt="Signup" className="w-full my-2 object-contain" />
                </div>
                <div className="w-full lg:w-1/2 p-6 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
                    <h5 className="text-xl font-medium text-gray-900 dark:text-white mb-6">
                        Scholarship Form
                    </h5>

                    {/* Tabs */}
                    <div className="tabs">
                        <div className="flex border-b border-gray-200">
                            {/* Render tab buttons dynamically */}
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    className={`tab-button ${activeTab === category
                                            ? "bg-blue-500 text-white"
                                            : "bg-gray-200 text-gray-700"
                                        } cursor-pointer py-2 px-4`}
                                    onClick={() => handleTabClick(category)}
                                >
                                    {category
                                        .replace(/([A-Z])/g, " $1") // Add space before capital letters
                                        .replace(/^./, (str) => str.toUpperCase())}
                                </button>
                            ))}
                        </div>

                        {/* Tab Content */}
                        <div className="mt-4">
                            {/* Dynamically render input fields based on activeTab */}
                            {scholarship[activeTab] && (
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {scholarship[activeTab].map((field, index) => (
                                        <div key={index}>
                                            <label
                                                htmlFor={field.name}
                                                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                            >
                                                {field.name}
                                            </label>
                                            <input
                                                type={field.type}
                                                name={field.name}
                                                id={field.name}
                                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                                                required
                                            />
                                            <p className="text-xs text-gray-500 mt-1">
                                                Max file size: {field.size}
                                            </p>
                                        </div>
                                    ))}
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
