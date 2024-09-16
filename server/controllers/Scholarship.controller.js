const Scholarship = require('../model/Scholarship.model.js');

// Controller to add a scholarship into the database
const addScholarship = async (req, res) => {
  try {
    
    const { 
      title, 
      description, 
      deadline, 
      requireddocuments, 
      eligibility, 
      status 
    } = req.body;

    const newScholarship = new Scholarship({
      title,
      description,
      deadline,
      requireddocuments,
      eligibility,
      status
    });

    await newScholarship.save();

    res.status(201).json({ message: "Scholarship added successfully", data: newScholarship });
  } catch (error) {
    console.error("Error adding scholarship:", error);
    res.status(500).json({ message: "Failed to add scholarship", error });
  }
};

module.exports = {
  addScholarship
};
