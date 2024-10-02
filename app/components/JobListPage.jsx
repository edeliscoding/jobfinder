"use client";
// import { useEffect, useState } from "react";
// import JobCard from "./JobCard";

// export default function JobListPage() {
//   const [jobs, setJobs] = useState([]);
//   const [filters, setFilters] = useState({
//     search: "",
//     contractStatus: "",
//     locationStatus: "",
//     salaryMin: "",
//     salaryMax: "",
//     datePosted: "",
//     experienceLevel: "",
//     companySize: "",
//     industry: "",
//     skills: "",
//     educationLevel: "",
//     benefits: "",
//     jobType: "",
//     locationRadius: "",
//     locationCenter: "",
//   });

//   // Fetch jobs from the API
//   const fetchJobs = async (filterParams = {}) => {
//     const query = new URLSearchParams(filterParams).toString();
//     try {
//       const res = await fetch(`/api/jobs?${query}`);
//       const data = await res.json();
//       setJobs(data);
//     } catch (error) {
//       console.error("Error fetching jobs:", error);
//     }
//   };

//   // Load initial data and filter jobs when filters change
//   useEffect(() => {
//     fetchJobs(filters);
//   }, [filters]);

//   const handleInputChange = (e) => {
//     setFilters({
//       ...filters,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const query = new URLSearchParams(filters).toString();
//     const res = await fetch(`/api/jobs?${query}`);
//     const jobs = await res.json();
//     // Process job data (e.g., update job list)
//   };

//   return (
//     <div className="container mx-auto p-6 ">
//       <h1 className="text-2xl font-bold mb-4">Find Your Job</h1>
//       <form onSubmit={handleSubmit} className="space-y-4 text-gray-800">
//         {/* Search field */}
//         <input
//           type="text"
//           name="search"
//           value={filters.search}
//           onChange={handleInputChange}
//           placeholder="Search for jobs"
//           className="border p-2 w-full rounded"
//         />

//         {/* Contract Status */}
//         <select
//           name="contractStatus"
//           value={filters.contractStatus}
//           onChange={handleInputChange}
//           className="border p-2 w-full rounded"
//         >
//           <option value="">Contract Type</option>
//           <option value="Full-time">Full-time</option>
//           <option value="Part-time">Part-time</option>
//           <option value="Contract">Contract</option>
//           <option value="Temporary">Temporary</option>
//         </select>

//         {/* Location Status */}
//         <select
//           name="locationStatus"
//           value={filters.locationStatus}
//           onChange={handleInputChange}
//           className="border p-2 w-full rounded"
//         >
//           <option value="">Location</option>
//           <option value="Remote">Remote</option>
//           <option value="On-site">On-site</option>
//           <option value="Hybrid">Hybrid</option>
//         </select>

//         {/* Salary Min & Max */}
//         <div className="flex space-x-4">
//           <input
//             type="number"
//             name="salaryMin"
//             value={filters.salaryMin}
//             onChange={handleInputChange}
//             placeholder="Salary Min"
//             className="border p-2 w-full rounded"
//           />
//           <input
//             type="number"
//             name="salaryMax"
//             value={filters.salaryMax}
//             onChange={handleInputChange}
//             placeholder="Salary Max"
//             className="border p-2 w-full rounded"
//           />
//         </div>

//         {/* Date Posted */}
//         <input
//           type="date"
//           name="datePosted"
//           value={filters.datePosted}
//           onChange={handleInputChange}
//           className="border p-2 w-full rounded"
//         />

//         {/* Experience Level */}
//         <select
//           name="experienceLevel"
//           value={filters.experienceLevel}
//           onChange={handleInputChange}
//           className="border p-2 w-full rounded"
//         >
//           <option value="">Experience Level</option>
//           <option value="Entry">Entry</option>
//           <option value="Mid-level">Mid-level</option>
//           <option value="Senior">Senior</option>
//           <option value="Executive">Executive</option>
//         </select>

//         {/* Add other filters similarly, e.g., companySize, industry, skills, etc. */}

//         {/* Submit Button */}
//         <button type="submit" className="bg-blue-500 text-white p-2 rounded">
//           Apply Filters
//         </button>
//       </form>
//       {/* Job List */}
//       <div className="grid gap-4">
//         {jobs.length > 0 ? (
//           jobs.map((job) => <JobCard key={job._id} job={job} />)
//         ) : (
//           <p>No jobs found</p>
//         )}
//       </div>
//     </div>
//   );
// }
import { useState, useEffect } from "react";
import JobCard from "./JobCard"; // Import your JobCard component to display individual jobs

const contractOptions = ["Full-time", "Part-time", "Contract", "Temporary"];
const locationOptions = ["Remote", "On-site", "Hybrid"];
const experienceOptions = ["Entry", "Mid-level", "Senior", "Executive"];
const companySizeOptions = ["Startup", "SMB", "Enterprise"];
const jobTypeOptions = ["Permanent", "Temporary", "Internship", "Volunteer"];
const benefitsOptions = [
  "Health Insurance",
  "401(k)",
  "Remote Work",
  "Professional Development",
];

const JobListPage = () => {
  const [jobs, setJobs] = useState([]);
  const [filters, setFilters] = useState({
    search: "",
    contractStatus: [],
    locationStatus: [],
    salaryMin: "",
    salaryMax: "",
    datePosted: "",
    experienceLevel: [],
    companySize: [],
    industry: [],
    skills: "",
    educationLevel: "",
    benefits: [],
    jobType: [],
    locationRadius: "",
    locationCenter: "",
  });

  // Fetch jobs from the API
  // const fetchJobs = async (filterParams = {}) => {
  //   const query = new URLSearchParams(filterParams).toString();
  //   try {
  //     const res = await fetch(`/api/jobs?${query}`);
  //     const data = await res.json();
  //     setJobs(data);
  //   } catch (error) {
  //     console.error("Error fetching jobs:", error);
  //   }
  // };
  const fetchJobs = async (filterParams = {}) => {
    const query = new URLSearchParams();

    // Add string-based filters
    for (const key in filterParams) {
      if (Array.isArray(filterParams[key])) {
        filterParams[key].forEach((value) => {
          query.append(key, value); // Append array values correctly
        });
      } else if (filterParams[key]) {
        query.set(key, filterParams[key]);
      }
    }

    try {
      const res = await fetch(`/api/jobs?${query.toString()}`);
      const data = await res.json();
      setJobs(data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  // Load initial data and filter jobs when filters change
  useEffect(() => {
    fetchJobs(filters);
  }, [filters]);

  const handleCheckboxChange = (filterName, value) => {
    setFilters((prevFilters) => {
      const newValues = prevFilters[filterName].includes(value)
        ? prevFilters[filterName].filter((v) => v !== value) // Remove if already selected
        : [...prevFilters[filterName], value]; // Add if not selected

      return {
        ...prevFilters,
        [filterName]: newValues,
      };
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const renderCheckboxGroup = (label, filterName, options) => (
    <div className="mb-4">
      <label className="block font-medium mb-2">{label}</label>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <label key={option} className="flex items-center space-x-2">
            <input
              type="checkbox"
              name={filterName}
              value={option}
              checked={filters[filterName].includes(option)}
              onChange={() => handleCheckboxChange(filterName, option)}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>
    </div>
  );

  return (
    <div className="p-4">
      {/* Job Filters */}
      <div className="mb-6">
        <input
          type="text"
          name="search"
          value={filters.search}
          onChange={handleInputChange}
          placeholder="Search jobs..."
          className="border p-2 rounded mb-4 w-full"
        />

        {/* Contract Status */}
        {renderCheckboxGroup(
          "Contract Type",
          "contractStatus",
          contractOptions
        )}

        {/* Location Status */}
        {renderCheckboxGroup("Location", "locationStatus", locationOptions)}

        {/* Salary Range */}
        <div className="mb-4">
          <label className="block font-medium mb-2">Salary Range</label>
          <div className="flex space-x-2">
            <input
              type="number"
              name="salaryMin"
              value={filters.salaryMin}
              onChange={handleInputChange}
              placeholder="Min Salary"
              className="border p-2 rounded w-full"
            />
            <input
              type="number"
              name="salaryMax"
              value={filters.salaryMax}
              onChange={handleInputChange}
              placeholder="Max Salary"
              className="border p-2 rounded w-full"
            />
          </div>
        </div>

        {/* Experience Level */}
        {renderCheckboxGroup(
          "Experience Level",
          "experienceLevel",
          experienceOptions
        )}

        {/* Company Size */}
        {renderCheckboxGroup("Company Size", "companySize", companySizeOptions)}

        {/* Benefits */}
        {renderCheckboxGroup("Benefits", "benefits", benefitsOptions)}

        {/* Job Type */}
        {renderCheckboxGroup("Job Type", "jobType", jobTypeOptions)}

        <button
          className="bg-blue-500 text-white p-2 rounded mt-4"
          onClick={() => fetchJobs(filters)}
        >
          Apply Filters
        </button>
      </div>

      {/* Job List */}
      <div className="grid gap-4">
        {jobs.length > 0 ? (
          jobs.map((job) => <JobCard key={job._id} job={job} />)
        ) : (
          <p>No jobs found</p>
        )}
      </div>
    </div>
  );
};

export default JobListPage;
