const Scholarship = require('../model/Scholarship.model.js');
const catchAsync = require("../util/catchAsync");
const AppError = require("../util/appError");


// Controller to add a scholarship into the database
const addScholarship = async (req, res) => {
    try {

        const {
            title, description, deadline, requireddocuments, eligibility, status
        } = req.body;

        const newScholarship = new Scholarship({
            title, description, deadline, requireddocuments, eligibility, status
        });

        await newScholarship.save();

        res.status(201).json({message: "Scholarship added successfully", data: newScholarship});
    } catch (error) {
        console.error("Error adding scholarship:", error);
        res.status(500).json({message: "Failed to add scholarship", error});
    }
};

const getAllScholarships = catchAsync(async (req, res) => {

    const scholarships = await Scholarship.aggregate([{
        // Match scholarships where the endDate is greater than or equal to the current date
        $match: {
            "deadline.endDate": {$gte: new Date()}
        }
    }, {
        // Project the fields you want to see in the result (optional)
        $project: {
            title: 1, description: 1, "deadline.endDate": 1, eligibility: 1
        }
    }]);

    console.log(scholarships);

    res.status(200).json({
        status: "success", data: {
            scholarships
        }
    })


});


const getSpecificScholarship = catchAsync(async (req, res, next) => {

    const id = req.body.scholarshipId;
    const scholarship = await Scholarship.findById(id);

    if (!scholarship) return next(new AppError("No such scholarship", 400));

    res.status(200).json({
        status: "success", data: {
            scholarship
        }
    })


});

module.exports = {
    addScholarship, getAllScholarships, getSpecificScholarship
};
