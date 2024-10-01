import React from "react";

export default function JobCard({ key, job }) {
  return (
    <div key={job._id} className="p-4 border rounded-lg">
      <h2 className="text-lg font-bold">{job.title}</h2>
      <p>{job.companyName}</p>
      <p>
        {job.salary.min} - {job.salary.max} {job.salary.currency}
      </p>
      <p>
        {job.location.city}, {job.location.state}
      </p>
    </div>
  );
}
