"use server";
import React from "react";
import Jobs from "@/app/models/Job";
import dbConnect from "@/lib/mongodb";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// export const createJob = async (formData) => {
//   const {
//     title,
//     companyName,
//     companyLogo,
//     contractStatus,
//     locationStatus,
//     jobDescription,
//     salary,
//     location,
//     datePosted,
//     experienceLevel,
//     companySize,
//     industry,
//     skills,
//   } = formData;
//   try {
//     await dbConnect();
//     const newJob = new Jobs({
//       title,
//       companyName,
//       companyLogo,
//       contractStatus,
//       locationStatus,
//       jobDescription,
//       salary,
//       location,
//       datePosted,
//       experienceLevel,
//       companySize,
//       industry,
//       skills,
//     });

//     await newJob.save();
//   } catch (err) {
//     console.log(err);
//   }
// };
export async function createJobAction(data) {
  console.log("data", data);
  try {
    await dbConnect();

    // Insert the data from the form into the MongoDB collection
    const result = await Jobs.create({
      title: data.get("title"),
      companyName: data.get("companyName"),
      companyLogo: data.get("companyLogo"),
      contractStatus: data.get("jobContract"),
      location: {
        city: data.get("city"),
        state: data.get("state"),
        country: data.get("country"),
      },
      jobDescription: data.get("jobDescription"),
      salary: {
        min: parseFloat(data.get("salaryMin")),
        max: parseFloat(data.get("salaryMax")),
      },

      experienceLevel: data.get("experienceLevel"),
      companySize: data.get("companySize"),
      industry: data.getAll("industry"), // Multi-select industries
      skills: data.getAll("skills"), // Dynamic skills input
      benefits: data.getAll("benefits"), // Dynamic benefits input
      requirements: data.getAll("requirements"), // Dynamic requirements input
      aboutUs: data.get("aboutUs"),
      datePosted: data.get("datePosted"),
      // createdAt: data.get("createdOn"),
    });

    return { success: true, insertedId: result.insertedId };
  } catch (error) {
    console.error(error);
    return { success: false, error: "Failed to create job." };
  }
  revalidatePath("/");
  redirect("/");
}
