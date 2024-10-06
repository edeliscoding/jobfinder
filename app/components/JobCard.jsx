import React from "react";

export default function JobCard({ key, job }) {
  return (
    <div
      key={job._id}
      className="p-6 border border-gray-700 rounded-lg w-full mt-4 bg-gray-900 text-white sm:flex sm:items-center sm:justify-between gap-4"
    >
      <div>
        <h2 className="text-xl font-semibold text-white mb-2">{job.title}</h2>
        <p className="text-gray-400">{job.companyName}</p>
      </div>
      <div className="mt-4 sm:mt-0">
        <p className="text-gray-400">
          {job.salary.min} - {job.salary.max} {job.salary.currency}
        </p>
        <p className="text-gray-400">
          {job.location.city}, {job.location.state}
        </p>
      </div>
    </div>
  );
}
