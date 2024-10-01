// app/api/jobs/route.js
import Job from "@/app/models/Job";
import connectToDatabase from "@/lib/mongodb";

export async function GET(request) {
  await connectToDatabase();
  const { searchParams } = new URL(request.url);

  // Gather all filter parameters
  const search = searchParams.get("search");
  const contractStatus = searchParams.get("contractStatus");
  const locationStatus = searchParams.get("locationStatus");
  const salaryMin = searchParams.get("salaryMin");
  const salaryMax = searchParams.get("salaryMax");
  const datePosted = searchParams.get("datePosted");
  const experienceLevel = searchParams.get("experienceLevel");
  const companySize = searchParams.get("companySize");
  const industry = searchParams.get("industry");
  const skills = searchParams.get("skills");
  const educationLevel = searchParams.get("educationLevel");
  const benefits = searchParams.get("benefits");
  const jobType = searchParams.get("jobType");
  const locationRadius = searchParams.get("locationRadius");
  const locationCenter = searchParams.get("locationCenter");

  const filters = {};

  // Build the filters dynamically based on what the user has filled in
  if (search) filters.title = new RegExp(search, "i");
  if (contractStatus) filters.contractStatus = contractStatus;
  if (locationStatus) filters.locationStatus = locationStatus;
  if (salaryMin) filters["salary.min"] = { $gte: Number(salaryMin) };
  if (salaryMax) filters["salary.max"] = { $lte: Number(salaryMax) };
  if (datePosted) filters.datePosted = { $gte: new Date(datePosted) };
  if (experienceLevel) filters.experienceLevel = experienceLevel;
  if (companySize) filters.companySize = companySize;
  if (industry) filters.industry = { $in: industry.split(",") }; // Assuming industry is comma-separated
  if (skills) filters.skills = { $in: skills.split(",") }; // Assuming skills is comma-separated
  if (educationLevel) filters.educationLevel = educationLevel;
  if (benefits) filters.benefits = { $in: benefits.split(",") };
  if (jobType) filters.jobType = jobType;

  // Handle geospatial queries if location is provided
  if (locationRadius && locationCenter) {
    const [lng, lat] = locationCenter.split(",").map(Number);
    filters.location = {
      $geoWithin: {
        $centerSphere: [[lng, lat], locationRadius / 3963.2], // Convert miles to radians (Earth radius in miles)
      },
    };
  }

  try {
    const jobs = await Job.find(filters);
    return new Response(JSON.stringify(jobs), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
  }
}
