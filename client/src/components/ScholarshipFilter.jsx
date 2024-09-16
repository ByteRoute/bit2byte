import React, { useState } from "react";

const filterOptions = {
  eligibleCourse: [
    { value: "Bachelors", label: "Bachelors" },
    { value: "Masters", label: "Masters" },
    { value: "PhD", label: "PhD" },
    { value: "Diploma", label: "Diploma" },
    { value: "PostDoctoral", label: "Post Doctoral" },
  ],
  minimumGPA: [
    { value: "2.0", label: "2.0" },
    { value: "2.5", label: "2.5" },
    { value: "3.0", label: "3.0" },
    { value: "3.5", label: "3.5" },
    { value: "4.0", label: "4.0" },
  ],
  nationality: [
    { value: "Indian", label: "Indian" },
    { value: "Non-Resident Indian", label: "Non-Resident Indian (NRI)" },
    { value: "Foreign National", label: "Foreign National" },
  ],
  state: [
    { value: "Uttar Pradesh", label: "Uttar Pradesh" },
    { value: "Maharashtra", label: "Maharashtra" },
    { value: "Karnataka", label: "Karnataka" },
    { value: "Tamil Nadu", label: "Tamil Nadu" },
    { value: "West Bengal", label: "West Bengal" },
    { value: "Gujarat", label: "Gujarat" },
  ],
  category: [
    { value: "General", label: "General" },
    { value: "OBC", label: "OBC" },
    { value: "SC", label: "SC" },
    { value: "ST", label: "ST" },
    { value: "EWS", label: "EWS" },
    { value: "Minority", label: "Minority" },
  ],
};

const ScholarshipFilter = () => {
  // Step 2: State for storing selected filters
  const [selectedFilters, setSelectedFilters] = useState({
    eligibleCourse: "",
    minimumGPA: "",
    nationality: "",
    state: "",
    category: "",
  });

  // Step 3: Handle dropdown changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setSelectedFilters({
      ...selectedFilters,
      [name]: value,
    });
  };

  return (
    <div className="flex gap-4 flex-wrap flex-row-reverse">
      <div>
        <select
          name="eligibleCourse"
          className="- select-xs text-xs p-1 select select-bordered max-w-xs"
          value={selectedFilters.eligibleCourse}
          onChange={handleChange}
        >
          <option value="">Select Course</option>
          {filterOptions.eligibleCourse.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <select
          className="select-xs text-xs p-1 select select-bordered max-w-xs"
          name="minimumGPA"
          value={selectedFilters.minimumGPA}
          onChange={handleChange}
        >
          <option value="">Select GPA</option>
          {filterOptions.minimumGPA.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <select
          className="select-xs text-xs p-1 select select-bordered max-w-xs"
          name="nationality"
          value={selectedFilters.nationality}
          onChange={handleChange}
        >
          <option value="">Select Nationality</option>
          {filterOptions.nationality.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <select
          className="select-xs text-xs p-1 select select-bordered max-w-xs"
          name="state"
          value={selectedFilters.state}
          onChange={handleChange}
        >
          <option value="">Select State</option>
          {filterOptions.state.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <select
          className="select-xs text-xs p-1 select select-bordered max-w-xs"
          name="category"
          value={selectedFilters.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          {filterOptions.category.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ScholarshipFilter;
