"use client";
import { useState } from "react";
import { createJobAction } from "@/app/actions/createJob";

export default function CreateJobForm() {
  const [skills, setSkills] = useState([""]);
  const [benefits, setBenefits] = useState([""]);
  const [requirements, setRequirements] = useState([""]);

  const industries = ["Technology", "Healthcare", "Education", "Finance"];

  //   // const handleMultiSelectChange = (e, fieldName) => {
  //   //   const { value, checked } = e.target;
  //   //   setFormValues((prevState) => ({
  //   //     ...prevState,
  //   //     [fieldName]: checked
  //   //       ? [...prevState[fieldName], value]
  //   //       : prevState[fieldName].filter((item) => item !== value),
  //   //   }));
  //   // };

  const handleInputChange = (e, index, fieldSetter, fieldValues) => {
    const { value } = e.target;
    const updatedFields = [...fieldValues];
    updatedFields[index] = value;
    fieldSetter(updatedFields);
  };

  const addField = (fieldSetter, fieldValues) => {
    fieldSetter([...fieldValues, ""]);
  };

  const removeField = (index, fieldSetter, fieldValues) => {
    const updatedFields = [...fieldValues];
    updatedFields.splice(index, 1);
    fieldSetter(updatedFields);
  };
  return (
    <div className="max-w-lg mx-auto bg-gray-800 shadow-lg p-6 rounded-lg mt-8">
      <h2 className="text-2xl font-semibold mb-6">Create a Job</h2>

      {/* Add action to form and use method POST */}
      <form action={createJobAction} className="space-y-4" id="job-form">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Job title
          </label>
          <input
            type="text"
            name="title"
            placeholder="Title"
            className="mt-1 block w-full p-2 border rounded-md"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Company Name
          </label>
          <input
            type="text"
            name="companyName"
            placeholder="company name"
            className="mt-1 block w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Company logo
          </label>
          <input
            type="url"
            name="companyLogo"
            placeholder="URL"
            className="mt-1 block w-full p-2 border rounded-md"
            required
          />
        </div>

        {/* <div>
          <label className="block text-sm font-medium text-gray-700">
            Job contract
          </label>
          <input
            type="text"
            name="jobContract"
            placeholder="Contract type"
            className="mt-1 block w-full p-2 border rounded-md"
            required
          />
        </div> */}
        <div>
          <h4>Contract Type</h4>
          <select
            name="jobContract"
            className="mt-1 block w-full p-2 border rounded-md text-gray-700"
          >
            <option value=""></option>
            <option value="Full-time">Full-time</option>
            <option value="Part-time">Part-time</option>
            <option value="Contract">Contract</option>
            <option value="Temporary">Temporary</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <div className="grid grid-cols-3 gap-2">
            <input
              type="text"
              name="city"
              placeholder="City"
              className="mt-1 grid-item block w-full p-2 border rounded-md"
              required
            />
            <input
              type="text"
              name="state"
              placeholder="State"
              className="mt-1 grid-item w-full block  p-2 border rounded-md"
              required
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              className="mt-1 grid-item w-full block p-2 border rounded-md"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Job description
          </label>
          <textarea
            name="jobDescription"
            placeholder="Description"
            className="mt-1 block w-full p-2 border rounded-md text-gray-700"
            required
          />
        </div>
        <span className="mt-4 inline-block">Salary Range</span>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <input
              type="number"
              name="salaryMin"
              placeholder="Min"
              className="mt-1 block w-full p-2 border rounded-md"
              required
            />
          </div>
          <div>
            <input
              type="number"
              name="salaryMax"
              placeholder="Max"
              className="mt-1 block w-full p-2 border rounded-md"
              required
            />
          </div>
        </div>

        {/* <div>
          <label className="block text-sm font-medium text-gray-700">
            Experience level
          </label>
          <input
            type="text"
            name="experienceLevel"
            placeholder="Experience level"
            className="mt-1 block w-full p-2 border rounded-md"
            required
          />
        </div> */}
        <div>
          <h4>Experience Level</h4>
          <select
            name="experienceLevel"
            className="mt-1 block w-full p-2 border rounded-md text-gray-700"
          >
            <option value=""></option>
            <option value="Entry">Entry</option>
            <option value="Mid-level">Mid-level</option>
            <option value="Senior">Senior</option>
            <option value="Executive">Executive</option>
          </select>
        </div>

        {/* <div>
          <label className="block text-sm font-medium text-gray-700">
            Company size
          </label>
          <input
            type="text"
            name="companySize"
            placeholder="Company size"
            className="mt-1 block w-full p-2 border rounded-md"
            required
          />
        </div> */}
        <div>
          <h4>Company Size</h4>
          <select
            name="companySize"
            className="mt-1 block w-full p-2 border rounded-md text-gray-700"
          >
            <option value=""></option>
            <option value="Startup">Startup</option>
            <option value="SMB">SMB</option>
            <option value="Enterprise">Enterprise</option>
          </select>
        </div>

        {/* Industry Multi-select */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Industry
          </label>
          <div className="mt-1 space-y-2 columns-3">
            {[
              "Tech",
              "Media",
              "Management",
              "Finance",
              "Healthcare",
              "Business",
              "Education",
              "Software",
              "Retail",
              "Data Science",
              "Banking",
              "Manufacturing",
              "Operations",
              "Real Estate",
              "Aerospace",
              "Telecom",
              "Insurance",
              "Other",
            ].map((industry) => (
              <div key={industry}>
                <input
                  type="checkbox"
                  name="industry"
                  value={industry}
                  className="mr-2 "
                />
                <label>{industry}</label>
              </div>
            ))}
          </div>
        </div>

        {/* Dynamic Skills, Benefits, Requirements Sections */}
        {/* Implement JavaScript for adding/removing dynamic fields in the same way */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Skills
            </label>
            {skills.map((skill, index) => (
              <div key={index} className="flex items-center space-x-2 mt-2">
                <input
                  name="skills"
                  type="text"
                  value={skill}
                  onChange={(e) =>
                    handleInputChange(e, index, setSkills, skills)
                  }
                  placeholder="Enter a skill"
                  className="block w-full p-2 border rounded-md"
                />
                {skills.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeField(index, setSkills, skills)}
                    className="text-red-500 font-bold"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => addField(setSkills, skills)}
              className="mt-2 py-1 px-3 bg-blue-500 text-white rounded-md"
            >
              Add Skill
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Benefits
            </label>
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-2 mt-2">
                <input
                  name="benefits"
                  type="text"
                  value={benefit}
                  onChange={(e) =>
                    handleInputChange(e, index, setBenefits, benefits)
                  }
                  placeholder="Enter a benefit"
                  className="block w-full p-2 border rounded-md"
                />
                {benefits.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeField(index, setBenefits, benefits)}
                    className="text-red-500 font-bold"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => addField(setBenefits, benefits)}
              className="mt-2 py-1 px-3 bg-blue-500 text-white rounded-md"
            >
              Add Benefit
            </button>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Requirements
            </label>
            {requirements.map((requirement, index) => (
              <div key={index} className="flex items-center space-x-2 mt-2">
                <input
                  name="requirements"
                  type="text"
                  value={requirement}
                  onChange={(e) =>
                    handleInputChange(e, index, setRequirements, requirements)
                  }
                  placeholder="Enter a requirement"
                  className="block w-full p-2 border rounded-md"
                />
                {requirements.length > 1 && (
                  <button
                    type="button"
                    onClick={() =>
                      removeField(index, setRequirements, requirements)
                    }
                    className="text-red-500 font-bold"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => addField(setRequirements, requirements)}
              className="mt-2 py-1 px-3 bg-blue-500 text-white rounded-md"
            >
              Add Requirement
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            About us
          </label>
          <textarea
            name="aboutUs"
            placeholder="About the role"
            className="mt-1 block w-full p-2 border rounded-md text-gray-700"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Date posted
          </label>
          <input
            type="date"
            name="datePosted"
            className="mt-1 block w-full p-2 border rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
        >
          Post job
        </button>
      </form>
    </div>
    // <form action={createJobAction}>Hello from createjob form</form>
  );
}
