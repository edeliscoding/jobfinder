"use client";
import CreateJobForm from "@/app/components/CreateJobForm";
import React, { useState } from "react";

const CreateJob = () => {
  // const [formValues, setFormValues] = useState({
  //   title: "",
  //   companyLogo: "",
  //   jobContract: "",
  //   location: "",
  //   jobDescription: "",
  //   salaryMin: "",
  //   salaryMax: "",
  //   experienceLevel: "",
  //   companySize: "",
  //   industry: [],
  //   // skills: [],
  //   // benefits: [],
  //   // requirements: [],
  //   aboutUs: "",
  //   datePosted: "",
  //   createdAt: "",
  // });

  // const [skills, setSkills] = useState([""]);
  // const [benefits, setBenefits] = useState([""]);
  // const [requirements, setRequirements] = useState([""]);

  // const handleInputChange = (e, index, fieldSetter, fieldValues) => {
  //   const { value } = e.target;
  //   const updatedFields = [...fieldValues];
  //   updatedFields[index] = value;
  //   fieldSetter(updatedFields);
  // };

  // const addField = (fieldSetter, fieldValues) => {
  //   fieldSetter([...fieldValues, ""]);
  // };

  // const removeField = (index, fieldSetter, fieldValues) => {
  //   const updatedFields = [...fieldValues];
  //   updatedFields.splice(index, 1);
  //   fieldSetter(updatedFields);
  // };

  // const industries = ["Technology", "Healthcare", "Education", "Finance"];

  // const handleMultiSelectChange = (e, fieldName) => {
  //   const { value, checked } = e.target;
  //   setFormValues((prevState) => ({
  //     ...prevState,
  //     [fieldName]: checked
  //       ? [...prevState[fieldName], value]
  //       : prevState[fieldName].filter((item) => item !== value),
  //   }));
  // };

  // //   const handleInputChange = (e) => {
  // //     const { name, value } = e.target;
  // //     setFormValues({ ...formValues, [name]: value });
  // //   };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Form Submitted:", formValues);
  //   // Add form submission logic
  // };
  // return (
  //   // <div className="max-w-lg mx-auto bg-gray-800 shadow-lg p-6 rounded-lg mt-8">
  //   //   <h2 className="text-2xl font-semibold mb-6">Create a Job</h2>
  //   //   <form onSubmit={handleSubmit} className="space-y-4" id="job-form">
  //   //     <div>
  //   //       <label className="block text-sm font-medium text-gray-700">
  //   //         Job title
  //   //       </label>
  //   //       <input
  //   //         type="text"
  //   //         name="title"
  //   //         value={formValues.title}
  //   //         onChange={handleInputChange}
  //   //         placeholder="Title"
  //   //         className="mt-1 block w-full p-2 border rounded-md"
  //   //       />
  //   //     </div>

  //   //     <div>
  //   //       <label className="block text-sm font-medium text-gray-700">
  //   //         Company logo
  //   //       </label>
  //   //       <input
  //   //         type="url"
  //   //         name="companyLogo"
  //   //         value={formValues.companyLogo}
  //   //         onChange={handleInputChange}
  //   //         placeholder="URL"
  //   //         className="mt-1 block w-full p-2 border rounded-md"
  //   //       />
  //   //     </div>

  //   //     <div>
  //   //       <label className="block text-sm font-medium text-gray-700">
  //   //         Job contract
  //   //       </label>
  //   //       <input
  //   //         type="text"
  //   //         name="jobContract"
  //   //         value={formValues.jobContract}
  //   //         onChange={handleInputChange}
  //   //         placeholder="Contract type"
  //   //         className="mt-1 block w-full p-2 border rounded-md"
  //   //       />
  //   //     </div>

  //   //     <div>
  //   //       <label className="block text-sm font-medium text-gray-700">
  //   //         Location
  //   //       </label>
  //   //       <input
  //   //         type="text"
  //   //         name="location"
  //   //         value={formValues.location}
  //   //         onChange={handleInputChange}
  //   //         placeholder="City, State, Country"
  //   //         className="mt-1 block w-full p-2 border rounded-md"
  //   //       />
  //   //     </div>

  //   //     <div>
  //   //       <label className="block text-sm font-medium text-gray-700">
  //   //         Job description
  //   //       </label>
  //   //       <textarea
  //   //         name="jobDescription"
  //   //         value={formValues.jobDescription}
  //   //         onChange={handleInputChange}
  //   //         placeholder="Description"
  //   //         className="mt-1 block w-full p-2 border rounded-md"
  //   //       />
  //   //     </div>

  //   //     <div className="grid grid-cols-2 gap-4">
  //   //       <div>
  //   //         <label className="block text-sm font-medium text-gray-700">
  //   //           Salary range
  //   //         </label>
  //   //         <input
  //   //           type="number"
  //   //           name="salaryMin"
  //   //           value={formValues.salaryMin}
  //   //           onChange={handleInputChange}
  //   //           placeholder="Min"
  //   //           className="mt-1 block w-full p-2 border rounded-md"
  //   //         />
  //   //       </div>
  //   //       <div className="mt-6">
  //   //         <input
  //   //           type="number"
  //   //           name="salaryMax"
  //   //           value={formValues.salaryMax}
  //   //           onChange={handleInputChange}
  //   //           placeholder="Max"
  //   //           className="mt-1 block w-full p-2 border rounded-md"
  //   //         />
  //   //       </div>
  //   //     </div>

  //   //     <div>
  //   //       <label className="block text-sm font-medium text-gray-700">
  //   //         Experience level
  //   //       </label>
  //   //       <input
  //   //         type="text"
  //   //         name="experienceLevel"
  //   //         value={formValues.experienceLevel}
  //   //         onChange={handleInputChange}
  //   //         placeholder="Experience level"
  //   //         className="mt-1 block w-full p-2 border rounded-md"
  //   //       />
  //   //     </div>

  //   //     <div>
  //   //       <label className="block text-sm font-medium text-gray-700">
  //   //         Company size
  //   //       </label>
  //   //       <input
  //   //         type="text"
  //   //         name="companySize"
  //   //         value={formValues.companySize}
  //   //         onChange={handleInputChange}
  //   //         placeholder="Company size"
  //   //         className="mt-1 block w-full p-2 border rounded-md"
  //   //       />
  //   //     </div>

  //   //     {/* Industry Multi-select */}
  //   //     <div>
  //   //       <label className="block text-sm font-medium text-gray-700">
  //   //         Industry
  //   //       </label>
  //   //       <div className="mt-1 space-y-2">
  //   //         {industries.map((industry) => (
  //   //           <div key={industry}>
  //   //             <input
  //   //               type="checkbox"
  //   //               value={industry}
  //   //               checked={formValues.industry.includes(industry)}
  //   //               onChange={(e) => handleMultiSelectChange(e, "industry")}
  //   //               className="mr-2"
  //   //             />
  //   //             <label>{industry}</label>
  //   //           </div>
  //   //         ))}
  //   //       </div>
  //   //     </div>
  //   //     <div className="space-y-4">
  //   //       {/* Skills */}
  //   //       <div>
  //   //         <label className="block text-sm font-medium text-gray-700">
  //   //           Skills
  //   //         </label>
  //   //         {skills.map((skill, index) => (
  //   //           <div key={index} className="flex items-center space-x-2 mt-2">
  //   //             <input
  //   //               type="text"
  //   //               value={skill}
  //   //               onChange={(e) =>
  //   //                 handleInputChange(e, index, setSkills, skills)
  //   //               }
  //   //               placeholder="Enter a skill"
  //   //               className="block w-full p-2 border rounded-md"
  //   //             />
  //   //             {skills.length > 1 && (
  //   //               <button
  //   //                 type="button"
  //   //                 onClick={() => removeField(index, setSkills, skills)}
  //   //                 className="text-red-500 font-bold"
  //   //               >
  //   //                 Remove
  //   //               </button>
  //   //             )}
  //   //           </div>
  //   //         ))}
  //   //         <button
  //   //           type="button"
  //   //           onClick={() => addField(setSkills, skills)}
  //   //           className="mt-2 py-1 px-3 bg-blue-500 text-white rounded-md"
  //   //         >
  //   //           Add Skill
  //   //         </button>
  //   //       </div>

  //   //       {/* Benefits */}
  //   //       <div>
  //   //         <label className="block text-sm font-medium text-gray-700">
  //   //           Benefits
  //   //         </label>
  //   //         {benefits.map((benefit, index) => (
  //   //           <div key={index} className="flex items-center space-x-2 mt-2">
  //   //             <input
  //   //               type="text"
  //   //               value={benefit}
  //   //               onChange={(e) =>
  //   //                 handleInputChange(e, index, setBenefits, benefits)
  //   //               }
  //   //               placeholder="Enter a benefit"
  //   //               className="block w-full p-2 border rounded-md"
  //   //             />
  //   //             {benefits.length > 1 && (
  //   //               <button
  //   //                 type="button"
  //   //                 onClick={() => removeField(index, setBenefits, benefits)}
  //   //                 className="text-red-500 font-bold"
  //   //               >
  //   //                 Remove
  //   //               </button>
  //   //             )}
  //   //           </div>
  //   //         ))}
  //   //         <button
  //   //           type="button"
  //   //           onClick={() => addField(setBenefits, benefits)}
  //   //           className="mt-2 py-1 px-3 bg-blue-500 text-white rounded-md"
  //   //         >
  //   //           Add Benefit
  //   //         </button>
  //   //       </div>

  //   //       {/* Requirements */}
  //   //       <div>
  //   //         <label className="block text-sm font-medium text-gray-700">
  //   //           Requirements
  //   //         </label>
  //   //         {requirements.map((requirement, index) => (
  //   //           <div key={index} className="flex items-center space-x-2 mt-2">
  //   //             <input
  //   //               type="text"
  //   //               value={requirement}
  //   //               onChange={(e) =>
  //   //                 handleInputChange(e, index, setRequirements, requirements)
  //   //               }
  //   //               placeholder="Enter a requirement"
  //   //               className="block w-full p-2 border rounded-md"
  //   //             />
  //   //             {requirements.length > 1 && (
  //   //               <button
  //   //                 type="button"
  //   //                 onClick={() =>
  //   //                   removeField(index, setRequirements, requirements)
  //   //                 }
  //   //                 className="text-red-500 font-bold"
  //   //               >
  //   //                 Remove
  //   //               </button>
  //   //             )}
  //   //           </div>
  //   //         ))}
  //   //         <button
  //   //           type="button"
  //   //           onClick={() => addField(setRequirements, requirements)}
  //   //           className="mt-2 py-1 px-3 bg-blue-500 text-white rounded-md"
  //   //         >
  //   //           Add Requirement
  //   //         </button>
  //   //       </div>
  //   //     </div>

  //   //     <div>
  //   //       <label className="block text-sm font-medium text-gray-700">
  //   //         About us
  //   //       </label>
  //   //       <textarea
  //   //         name="aboutUs"
  //   //         value={formValues.aboutUs}
  //   //         onChange={handleInputChange}
  //   //         placeholder="About the role"
  //   //         className="mt-1 block w-full p-2 border rounded-md"
  //   //       />
  //   //     </div>

  //   //     <div>
  //   //       <label className="block text-sm font-medium text-gray-700">
  //   //         Date posted
  //   //       </label>
  //   //       <input
  //   //         type="date"
  //   //         name="datePosted"
  //   //         value={formValues.datePosted}
  //   //         onChange={handleInputChange}
  //   //         className="mt-1 block w-full p-2 border rounded-md"
  //   //       />
  //   //     </div>

  //   //     <div>
  //   //       <label className="block text-sm font-medium text-gray-700">
  //   //         Created on
  //   //       </label>
  //   //       <input
  //   //         type="date"
  //   //         name="createdOn"
  //   //         value={formValues.createdOn}
  //   //         onChange={handleInputChange}
  //   //         className="mt-1 block w-full p-2 border rounded-md"
  //   //       />
  //   //     </div>

  //   //     <button
  //   //       type="submit"
  //   //       className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
  //   //     >
  //   //       Post job
  //   //     </button>
  //   //   </form>
  //   // </div>
  //   <div className="max-w-lg mx-auto bg-gray-800 shadow-lg p-6 rounded-lg mt-8">
  //     <h2 className="text-2xl font-semibold mb-6">Create a Job</h2>

  //     {/* Add action to form and use method POST */}
  //     <form
  //       action={createJobAction}
  //       method="POST"
  //       className="space-y-4"
  //       id="job-form"
  //     >
  //       <div>
  //         <label className="block text-sm font-medium text-gray-700">
  //           Job title
  //         </label>
  //         <input
  //           type="text"
  //           name="title"
  //           placeholder="Title"
  //           className="mt-1 block w-full p-2 border rounded-md"
  //           required
  //         />
  //       </div>

  //       <div>
  //         <label className="block text-sm font-medium text-gray-700">
  //           Company logo
  //         </label>
  //         <input
  //           type="url"
  //           name="companyLogo"
  //           placeholder="URL"
  //           className="mt-1 block w-full p-2 border rounded-md"
  //           required
  //         />
  //       </div>

  //       <div>
  //         <label className="block text-sm font-medium text-gray-700">
  //           Job contract
  //         </label>
  //         <input
  //           type="text"
  //           name="jobContract"
  //           placeholder="Contract type"
  //           className="mt-1 block w-full p-2 border rounded-md"
  //           required
  //         />
  //       </div>

  //       <div>
  //         <label className="block text-sm font-medium text-gray-700">
  //           Location
  //         </label>
  //         <input
  //           type="text"
  //           name="location"
  //           placeholder="City, State, Country"
  //           className="mt-1 block w-full p-2 border rounded-md"
  //           required
  //         />
  //       </div>

  //       <div>
  //         <label className="block text-sm font-medium text-gray-700">
  //           Job description
  //         </label>
  //         <textarea
  //           name="jobDescription"
  //           placeholder="Description"
  //           className="mt-1 block w-full p-2 border rounded-md"
  //           required
  //         />
  //       </div>

  //       <div className="grid grid-cols-2 gap-4">
  //         <div>
  //           <label className="block text-sm font-medium text-gray-700">
  //             Salary range
  //           </label>
  //           <input
  //             type="number"
  //             name="salaryMin"
  //             placeholder="Min"
  //             className="mt-1 block w-full p-2 border rounded-md"
  //             required
  //           />
  //         </div>
  //         <div>
  //           <input
  //             type="number"
  //             name="salaryMax"
  //             placeholder="Max"
  //             className="mt-1 block w-full p-2 border rounded-md"
  //             required
  //           />
  //         </div>
  //       </div>

  //       <div>
  //         <label className="block text-sm font-medium text-gray-700">
  //           Experience level
  //         </label>
  //         <input
  //           type="text"
  //           name="experienceLevel"
  //           placeholder="Experience level"
  //           className="mt-1 block w-full p-2 border rounded-md"
  //           required
  //         />
  //       </div>

  //       <div>
  //         <label className="block text-sm font-medium text-gray-700">
  //           Company size
  //         </label>
  //         <input
  //           type="text"
  //           name="companySize"
  //           placeholder="Company size"
  //           className="mt-1 block w-full p-2 border rounded-md"
  //           required
  //         />
  //       </div>

  //       {/* Industry Multi-select */}
  //       <div>
  //         <label className="block text-sm font-medium text-gray-700">
  //           Industry
  //         </label>
  //         <div className="mt-1 space-y-2">
  //           {["Tech", "Finance", "Healthcare"].map((industry) => (
  //             <div key={industry}>
  //               <input
  //                 type="checkbox"
  //                 name="industry"
  //                 value={industry}
  //                 className="mr-2"
  //               />
  //               <label>{industry}</label>
  //             </div>
  //           ))}
  //         </div>
  //       </div>

  //       {/* Dynamic Skills, Benefits, Requirements Sections */}
  //       {/* Implement JavaScript for adding/removing dynamic fields in the same way */}

  //       <div>
  //         <label className="block text-sm font-medium text-gray-700">
  //           About us
  //         </label>
  //         <textarea
  //           name="aboutUs"
  //           placeholder="About the role"
  //           className="mt-1 block w-full p-2 border rounded-md"
  //           required
  //         />
  //       </div>

  //       <div>
  //         <label className="block text-sm font-medium text-gray-700">
  //           Date posted
  //         </label>
  //         <input
  //           type="date"
  //           name="datePosted"
  //           className="mt-1 block w-full p-2 border rounded-md"
  //           required
  //         />
  //       </div>

  //       <div>
  //         <label className="block text-sm font-medium text-gray-700">
  //           Created on
  //         </label>
  //         <input
  //           type="date"
  //           name="createdOn"
  //           className="mt-1 block w-full p-2 border rounded-md"
  //           required
  //         />
  //       </div>

  //       <button
  //         type="submit"
  //         className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700"
  //       >
  //         Post job
  //       </button>
  //     </form>
  //   </div>
  // );
  return <CreateJobForm />;
};

export default CreateJob;
