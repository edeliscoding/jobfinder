import { getJobById } from "@/app/actions/fetchJobById";
import React from "react";
import moment from "moment";

export default async function JobsPage({ params }) {
  const jobId = params.id;
  const job = await getJobById(jobId);
  return (
    <>
      <div
        className="relative flex size-full min-h-screen flex-col bg-[#f8fafb] group/design-root overflow-x-hidden container mx-auto"
        style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
      >
        <div className="flex items-center bg-[#f8fafb] p-4 pb-2 justify-between">
          <div
            className="text-[#0e141b] flex size-12 shrink-0 items-center"
            data-icon="ArrowLeft"
            data-size="24px"
            data-weight="regular"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24px"
              height="24px"
              fill="currentColor"
              viewBox="0 0 256 256"
            >
              <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z" />
            </svg>
          </div>
          <h2 className="text-[#0e141b] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
            {job.title}
          </h2>
          <div className="flex w-12 items-center justify-end">
            <button className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 bg-transparent text-[#0e141b] gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0">
              <div
                className="text-[#0e141b]"
                data-icon="Share"
                data-size="24px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M229.66,109.66l-48,48a8,8,0,0,1-11.32-11.32L204.69,112H165a88,88,0,0,0-85.23,66,8,8,0,0,1-15.5-4A103.94,103.94,0,0,1,165,96h39.71L170.34,61.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,229.66,109.66ZM192,208H40V88a8,8,0,0,0-16,0V208a16,16,0,0,0,16,16H192a8,8,0,0,0,0-16Z" />
                </svg>
              </div>
            </button>
          </div>
        </div>
        <div className="flex p-4 @container">
          <div className="flex w-full flex-col gap-4 items-start">
            <div className="flex gap-4 flex-col items-start">
              <div
                className="bg-center bg-no-repeat aspect-square bg-cover rounded-xl min-h-32 w-32"
                style={{
                  backgroundImage:
                    'url("https://cdn.usegalileo.ai/sdxl10/b1152f18-191a-4f24-bc6d-f06bd687c8c2.png")',
                }}
              />
              <div className="flex flex-col">
                <p className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em]">
                  {job.companyName}
                </p>
                <p className="text-[#4f7296] text-base font-normal leading-normal">
                  {job.location.city}, {job.location.state}{" "}
                  {job.location.country}
                </p>
                <p className="text-[#4f7296] text-base font-normal leading-normal">
                  {job.locationStatus}
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="text-[#0e141b] text-base font-normal leading-normal pb-3 pt-1 px-4">
          {job.jobDescription}
        </p>
        <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Salary
        </h2>
        <p className="text-[#0e141b] text-base font-normal leading-normal pb-3 pt-1 px-4">
          {`$${job.salary.min} - $${job.salary.max} ${job.salary.currency}`}
        </p>
        <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Date posted
        </h2>
        <p className="text-[#0e141b] text-base font-normal leading-normal pb-3 pt-1 px-4">
          {moment(job.createdAt).fromNow()}
        </p>
        <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Experience level
        </h2>
        <p className="text-[#0e141b] text-base font-normal leading-normal pb-3 pt-1 px-4">
          {job.experienceLevel} level
        </p>
        <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Company size
        </h2>
        <p className="text-[#0e141b] text-base font-normal leading-normal pb-3 pt-1 px-4">
          {job.companySize}
        </p>
        <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Industry
        </h2>
        {/* <p className="text-[#0e141b] text-base font-normal leading-normal pb-3 pt-1 px-4">
          Internet
        </p> */}
        <div className="flex gap-3 p-3 flex-wrap pr-4">
          {job.industry.map((ind) => (
            <div
              key={ind}
              className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#e8edf3] pl-4 pr-4"
            >
              <p className="text-[#0e141b] text-sm font-medium leading-normal">
                {ind}
              </p>
            </div>
          ))}
        </div>
        <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Required skills
        </h2>
        <div className="flex gap-3 p-3 flex-wrap pr-4">
          {/* <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#e8edf3] pl-4 pr-4">
            <p className="text-[#0e141b] text-sm font-medium leading-normal">
              Java
            </p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#e8edf3] pl-4 pr-4">
            <p className="text-[#0e141b] text-sm font-medium leading-normal">
              Python
            </p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#e8edf3] pl-4 pr-4">
            <p className="text-[#0e141b] text-sm font-medium leading-normal">
              C++
            </p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#e8edf3] pl-4 pr-4">
            <p className="text-[#0e141b] text-sm font-medium leading-normal">
              Go
            </p>
          </div>
          <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#e8edf3] pl-4 pr-4">
            <p className="text-[#0e141b] text-sm font-medium leading-normal">
              Rust
            </p>
          </div> */}
          {job.skills.map((skill) => (
            <div
              key={skill}
              className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-xl bg-[#e8edf3] pl-4 pr-4"
            >
              <p className="text-[#0e141b] text-sm font-medium leading-normal">
                {skill}
              </p>
            </div>
          ))}
        </div>
        <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Education requirements
        </h2>
        <p className="text-[#0e141b] text-base font-normal leading-normal pb-3 pt-1 px-4">
          {job.educationLevel}
        </p>
        <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Benefits
        </h2>
        <p className="text-[#0e141b] text-base font-normal leading-normal pb-3 pt-1 px-4">
          {job.benefits.map(
            (benefit, index) =>
              benefit + (index < job.benefits.length - 1 ? ", " : "")
          )}
        </p>
        <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Job type
        </h2>
        <p className="text-[#0e141b] text-base font-normal leading-normal pb-3 pt-1 px-4">
          {job.jobType}
        </p>
        <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Job requirements
        </h2>
        <div className="px-4">
          {job.jobRequirements.map((requirement, index) => (
            <p
              key={index}
              className="text-[#0e141b] text-base font-normal leading-normal pb-3 pt-1"
            >
              {requirement}
            </p>
          ))}
          {/* <label className="flex gap-x-3 py-3 flex-row-reverse justify-between">
            <input
              type="checkbox"
              className="h-5 w-5 rounded border-[#d0dbe6] border-2 bg-transparent text-[#1972d2] checked:bg-[#1972d2] checked:border-[#1972d2] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#d0dbe6] focus:outline-none"
            />
            <p className="text-[#0e141b] text-base font-normal leading-normal">
              3+ years of software engineering experience
            </p>
          </label>
          <label className="flex gap-x-3 py-3 flex-row-reverse justify-between">
            <input
              type="checkbox"
              className="h-5 w-5 rounded border-[#d0dbe6] border-2 bg-transparent text-[#1972d2] checked:bg-[#1972d2] checked:border-[#1972d2] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#d0dbe6] focus:outline-none"
            />
            <p className="text-[#0e141b] text-base font-normal leading-normal">
              Experience building scalable systems
            </p>
          </label>
          <label className="flex gap-x-3 py-3 flex-row-reverse justify-between">
            <input
              type="checkbox"
              className="h-5 w-5 rounded border-[#d0dbe6] border-2 bg-transparent text-[#1972d2] checked:bg-[#1972d2] checked:border-[#1972d2] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#d0dbe6] focus:outline-none"
            />
            <p className="text-[#0e141b] text-base font-normal leading-normal">
              Experience working with microservices
            </p>
          </label>
          <label className="flex gap-x-3 py-3 flex-row-reverse justify-between">
            <input
              type="checkbox"
              className="h-5 w-5 rounded border-[#d0dbe6] border-2 bg-transparent text-[#1972d2] checked:bg-[#1972d2] checked:border-[#1972d2] checked:bg-[image:--checkbox-tick-svg] focus:ring-0 focus:ring-offset-0 focus:border-[#d0dbe6] focus:outline-none"
            />
            <p className="text-[#0e141b] text-base font-normal leading-normal">
              Experience with open source technologies
            </p>
          </label> */}
        </div>
        <h2 className="text-[#0e141b] text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          About the company
        </h2>
        <p className="text-[#0e141b] text-base font-normal leading-normal pb-3 pt-1 px-4">
          {job.aboutUs}
        </p>
        <div className="h-5 bg-[#f8fafb]" />
      </div>
    </>
  );
}
