// app/api/jobs/route.js
import { NextResponse } from "next/server";
import Job from "@/app/models/Job";
import connectToDatabase from "@/lib/mongodb";

// const jobSeedData = [
//   {
//     title: "Senior Software Engineer",
//     companyName: "TechCorp",
//     companyLogo: "https://example.com/techcorp-logo.png",
//     contractStatus: "Full-time",
//     locationStatus: "Remote",
//     jobDescription:
//       "We are seeking a talented Senior Software Engineer to join our team...",
//     salary: {
//       min: 120000,
//       max: 160000,
//       currency: "USD",
//     },
//     location: {
//       city: "San Francisco",
//       state: "CA",
//       country: "USA",
//       coordinates: [-122.4194, 37.7749],
//     },
//     datePosted: new Date("2024-09-20"),
//     experienceLevel: "Senior",
//     companySize: "Enterprise",
//     industry: ["Technology", "Software"],
//     skills: ["JavaScript", "React", "Node.js", "AWS"],
//     educationLevel: "Bachelor's",
//     benefits: [
//       "Health Insurance",
//       "401(k)",
//       "Remote Work",
//       "Professional Development",
//     ],
//     jobType: "Permanent",
//     jobRequirements: [
//       "5+ years of experience in software development",
//       "Strong problem-solving skills",
//     ],
//     aboutUs: "TechCorp is a leading software company...",
//   },
//   {
//     title: "Marketing Intern",
//     companyName: "StartupX",
//     companyLogo: "https://example.com/startupx-logo.png",
//     contractStatus: "Part-time",
//     locationStatus: "On-site",
//     jobDescription: "Join our dynamic marketing team as an intern...",
//     salary: {
//       min: 20,
//       max: 25,
//       currency: "USD",
//     },
//     location: {
//       city: "New York",
//       state: "NY",
//       country: "USA",
//       coordinates: [-74.006, 40.7128],
//     },
//     datePosted: new Date("2024-09-25"),
//     experienceLevel: "Entry",
//     companySize: "Startup",
//     industry: ["Marketing", "Technology"],
//     skills: ["Social Media", "Content Creation", "Analytics"],
//     educationLevel: "High School",
//     benefits: ["Flexible Schedule", "Networking Opportunities"],
//     jobType: "Internship",
//     jobRequirements: [
//       "Currently pursuing a degree in Marketing or related field",
//       "Strong communication skills",
//     ],
//     aboutUs: "StartupX is an innovative tech startup...",
//   },
//   {
//     title: "Data Scientist",
//     companyName: "HealthTech Inc.",
//     companyLogo: "https://example.com/healthtech-logo.png",
//     contractStatus: "Full-time",
//     locationStatus: "Hybrid",
//     jobDescription:
//       "We're looking for a skilled Data Scientist to join our healthcare analytics team...",
//     salary: {
//       min: 100000,
//       max: 140000,
//       currency: "USD",
//     },
//     location: {
//       city: "Boston",
//       state: "MA",
//       country: "USA",
//       coordinates: [-71.0589, 42.3601],
//     },
//     datePosted: new Date("2024-09-22"),
//     experienceLevel: "Mid-level",
//     companySize: "SMB",
//     industry: ["Healthcare", "Data Science"],
//     skills: ["Python", "Machine Learning", "SQL", "Statistics"],
//     educationLevel: "Master's",
//     benefits: [
//       "Health Insurance",
//       "401(k)",
//       "Gym Membership",
//       "Flexible Hours",
//     ],
//     jobType: "Permanent",
//     jobRequirements: [
//       "3+ years of experience in data science",
//       "Experience with healthcare data",
//     ],
//     aboutUs:
//       "HealthTech Inc. is revolutionizing healthcare through data-driven solutions...",
//   },
//   {
//     title: "ESL Teacher",
//     companyName: "Global Education",
//     companyLogo: "https://example.com/globaleducation-logo.png",
//     contractStatus: "Contract",
//     locationStatus: "On-site",
//     jobDescription:
//       "Teach English as a Second Language to international students...",
//     salary: {
//       min: 3000,
//       max: 4000,
//       currency: "USD",
//     },
//     location: {
//       city: "Tokyo",
//       country: "Japan",
//       coordinates: [139.6503, 35.6762],
//     },
//     datePosted: new Date("2024-09-18"),
//     experienceLevel: "Entry",
//     companySize: "SMB",
//     industry: ["Education", "Language"],
//     skills: ["Teaching", "English Language", "Curriculum Development"],
//     educationLevel: "Bachelor's",
//     benefits: [
//       "Housing Allowance",
//       "Flight Reimbursement",
//       "Cultural Experiences",
//     ],
//     jobType: "Temporary",
//     jobRequirements: ["Native English speaker", "TEFL certification"],
//     aboutUs:
//       "Global Education connects international students with qualified teachers...",
//   },
//   {
//     title: "Financial Analyst",
//     companyName: "BigBank",
//     companyLogo: "https://example.com/bigbank-logo.png",
//     contractStatus: "Full-time",
//     locationStatus: "On-site",
//     jobDescription:
//       "Join our financial analysis team to provide insights on market trends...",
//     salary: {
//       min: 80000,
//       max: 110000,
//       currency: "USD",
//     },
//     location: {
//       city: "Chicago",
//       state: "IL",
//       country: "USA",
//       coordinates: [-87.6298, 41.8781],
//     },
//     datePosted: new Date("2024-09-24"),
//     experienceLevel: "Mid-level",
//     companySize: "Enterprise",
//     industry: ["Finance", "Banking"],
//     skills: ["Financial Modeling", "Excel", "SQL", "Risk Analysis"],
//     educationLevel: "Bachelor's",
//     benefits: [
//       "Health Insurance",
//       "401(k)",
//       "Performance Bonuses",
//       "Professional Development",
//     ],
//     jobType: "Permanent",
//     jobRequirements: [
//       "3+ years of experience in financial analysis",
//       "CFA certification preferred",
//     ],
//     aboutUs: "BigBank is a leading financial institution...",
//   },
//   {
//     title: "UX/UI Designer",
//     companyName: "DesignHub",
//     companyLogo: "https://example.com/designhub-logo.png",
//     contractStatus: "Full-time",
//     locationStatus: "Remote",
//     jobDescription:
//       "We are looking for a creative UX/UI Designer to enhance user experiences...",
//     salary: {
//       min: 70000,
//       max: 95000,
//       currency: "USD",
//     },
//     location: {
//       city: "Austin",
//       state: "TX",
//       country: "USA",
//       coordinates: [-97.7431, 30.2672],
//     },
//     datePosted: new Date("2024-09-19"),
//     experienceLevel: "Mid-level",
//     companySize: "SMB",
//     industry: ["Design", "Technology"],
//     skills: ["Figma", "Sketch", "User Research", "Prototyping"],
//     educationLevel: "Bachelor's",
//     benefits: ["Remote Work", "Health Insurance", "Stock Options"],
//     jobType: "Permanent",
//     jobRequirements: [
//       "3+ years of experience in UX/UI design",
//       "Portfolio showcasing design projects",
//     ],
//     aboutUs: "DesignHub is a leading design agency...",
//   },
//   {
//     title: "Project Manager",
//     companyName: "BuildIt",
//     companyLogo: "https://example.com/buildit-logo.png",
//     contractStatus: "Full-time",
//     locationStatus: "Hybrid",
//     jobDescription: "Manage construction projects from start to finish...",
//     salary: {
//       min: 85000,
//       max: 110000,
//       currency: "USD",
//     },
//     location: {
//       city: "Denver",
//       state: "CO",
//       country: "USA",
//       coordinates: [-104.9903, 39.7392],
//     },
//     datePosted: new Date("2024-09-17"),
//     experienceLevel: "Senior",
//     companySize: "SMB",
//     industry: ["Construction", "Management"],
//     skills: ["Project Management", "Budgeting", "Scheduling"],
//     educationLevel: "Bachelor's",
//     benefits: ["Health Insurance", "Paid Time Off", "Company Car"],
//     jobType: "Permanent",
//     jobRequirements: [
//       "5+ years of project management experience",
//       "PMP certification preferred",
//     ],
//     aboutUs: "BuildIt is a leader in sustainable construction...",
//   },
//   {
//     title: "Customer Support Specialist",
//     companyName: "HelpDeskPro",
//     companyLogo: "https://example.com/helpdeskpro-logo.png",
//     contractStatus: "Full-time",
//     locationStatus: "Remote",
//     jobDescription:
//       "Provide top-notch customer support for our software products...",
//     salary: {
//       min: 45000,
//       max: 55000,
//       currency: "USD",
//     },
//     location: {
//       city: "Phoenix",
//       state: "AZ",
//       country: "USA",
//       coordinates: [-112.074, 33.4484],
//     },
//     datePosted: new Date("2024-09-21"),
//     experienceLevel: "Entry",
//     companySize: "SMB",
//     industry: ["Customer Service", "Technology"],
//     skills: ["Customer Support", "Communication", "Technical Troubleshooting"],
//     educationLevel: "High School",
//     benefits: ["Health Insurance", "401(k)", "Remote Work"],
//     jobType: "Permanent",
//     jobRequirements: ["Strong communication skills", "Problem-solving skills"],
//     aboutUs: "HelpDeskPro is a leading customer support platform...",
//   },
//   {
//     title: "Graphic Designer",
//     companyName: "Creative Studio",
//     companyLogo: "https://example.com/creativestudio-logo.png",
//     contractStatus: "Part-time",
//     locationStatus: "On-site",
//     jobDescription:
//       "We are looking for a part-time graphic designer to work on marketing campaigns...",
//     salary: {
//       min: 25,
//       max: 35,
//       currency: "USD",
//     },
//     location: {
//       city: "Los Angeles",
//       state: "CA",
//       country: "USA",
//       coordinates: [-118.2437, 34.0522],
//     },
//     datePosted: new Date("2024-09-19"),
//     experienceLevel: "Entry",
//     companySize: "SMB",
//     industry: ["Design", "Marketing"],
//     skills: ["Photoshop", "Illustrator", "Branding"],
//     educationLevel: "Bachelor's",
//     benefits: ["Flexible Schedule", "Creative Work Environment"],
//     jobType: "Temporary",
//     jobRequirements: [
//       "1+ year of graphic design experience",
//       "Portfolio required",
//     ],
//     aboutUs: "Creative Studio is a boutique design agency...",
//   },
//   {
//     title: "Cybersecurity Analyst",
//     companyName: "SecureNet",
//     companyLogo: "https://example.com/securenet-logo.png",
//     contractStatus: "Full-time",
//     locationStatus: "Hybrid",
//     jobDescription:
//       "Monitor and analyze security incidents and events, ensuring network security...",
//     salary: {
//       min: 90000,
//       max: 120000,
//       currency: "USD",
//     },
//     location: {
//       city: "Washington",
//       state: "DC",
//       country: "USA",
//       coordinates: [-77.0369, 38.9072],
//     },
//     datePosted: new Date("2024-09-22"),
//     experienceLevel: "Mid-level",
//     companySize: "Enterprise",
//     industry: ["Cybersecurity", "Technology"],
//     skills: ["Network Security", "Incident Response", "Risk Assessment"],
//     educationLevel: "Bachelor's",
//     benefits: [
//       "Health Insurance",
//       "401(k)",
//       "Tuition Reimbursement",
//       "Gym Membership",
//     ],
//     jobType: "Permanent",
//     jobRequirements: [
//       "2+ years of experience in cybersecurity",
//       "Knowledge of security protocols",
//     ],
//     aboutUs: "SecureNet provides cutting-edge security solutions...",
//   },
//   {
//     title: "HR Manager",
//     companyName: "GlobalTech",
//     companyLogo: "https://example.com/globaltech-logo.png",
//     contractStatus: "Full-time",
//     locationStatus: "On-site",
//     jobDescription:
//       "Lead human resources efforts including talent acquisition and employee relations...",
//     salary: {
//       min: 75000,
//       max: 95000,
//       currency: "USD",
//     },
//     location: {
//       city: "Miami",
//       state: "FL",
//       country: "USA",
//       coordinates: [-80.1918, 25.7617],
//     },
//     datePosted: new Date("2024-09-18"),
//     experienceLevel: "Senior",
//     companySize: "Enterprise",
//     industry: ["Human Resources", "Technology"],
//     skills: ["Recruitment", "Employee Relations", "HR Software"],
//     educationLevel: "Bachelor's",
//     benefits: [
//       "Health Insurance",
//       "401(k)",
//       "Paid Time Off",
//       "Work-Life Balance Initiatives",
//     ],
//     jobType: "Permanent",
//     jobRequirements: [
//       "5+ years of HR experience",
//       "Strong leadership and communication skills",
//     ],
//     aboutUs: "GlobalTech is a fast-growing international technology firm...",
//   },
//   {
//     title: "Product Manager",
//     companyName: "InnovateX",
//     companyLogo: "https://example.com/innovatex-logo.png",
//     contractStatus: "Full-time",
//     locationStatus: "Remote",
//     jobDescription:
//       "Manage the product lifecycle from conception to launch, working with cross-functional teams...",
//     salary: {
//       min: 100000,
//       max: 140000,
//       currency: "USD",
//     },
//     location: {
//       city: "Seattle",
//       state: "WA",
//       country: "USA",
//       coordinates: [-122.3321, 47.6062],
//     },
//     datePosted: new Date("2024-09-20"),
//     experienceLevel: "Mid-level",
//     companySize: "SMB",
//     industry: ["Product Management", "Technology"],
//     skills: ["Agile", "Scrum", "Product Strategy"],
//     educationLevel: "Bachelor's",
//     benefits: ["Stock Options", "Remote Work", "Health Insurance"],
//     jobType: "Permanent",
//     jobRequirements: [
//       "3+ years of experience in product management",
//       "Proven track record of managing software products",
//     ],
//     aboutUs: "InnovateX is driving innovation in the tech space...",
//   },
//   {
//     title: "Front-End Developer",
//     companyName: "WebSolutions",
//     companyLogo: "https://example.com/websolutions-logo.png",
//     contractStatus: "Full-time",
//     locationStatus: "Remote",
//     jobDescription:
//       "Develop cutting-edge front-end web applications with a focus on responsive design...",
//     salary: {
//       min: 85000,
//       max: 105000,
//       currency: "USD",
//     },
//     location: {
//       city: "Austin",
//       state: "TX",
//       country: "USA",
//       coordinates: [-97.7431, 30.2672],
//     },
//     datePosted: new Date("2024-09-21"),
//     experienceLevel: "Mid-level",
//     companySize: "SMB",
//     industry: ["Web Development", "Technology"],
//     skills: ["HTML", "CSS", "JavaScript", "React"],
//     educationLevel: "Bachelor's",
//     benefits: ["Health Insurance", "401(k)", "Remote Work", "Stock Options"],
//     jobType: "Permanent",
//     jobRequirements: [
//       "3+ years of experience in front-end development",
//       "Strong knowledge of responsive design",
//     ],
//     aboutUs:
//       "WebSolutions specializes in creating high-performance web apps...",
//   },
//   {
//     title: "Operations Manager",
//     companyName: "RetailPro",
//     companyLogo: "https://example.com/retailpro-logo.png",
//     contractStatus: "Full-time",
//     locationStatus: "On-site",
//     jobDescription:
//       "Oversee daily operations, manage staff, and improve processes in a retail environment...",
//     salary: {
//       min: 70000,
//       max: 90000,
//       currency: "USD",
//     },
//     location: {
//       city: "Houston",
//       state: "TX",
//       country: "USA",
//       coordinates: [-95.3698, 29.7604],
//     },
//     datePosted: new Date("2024-09-15"),
//     experienceLevel: "Mid-level",
//     companySize: "SMB",
//     industry: ["Retail", "Operations"],
//     skills: ["Operations Management", "Leadership", "Process Improvement"],
//     educationLevel: "Bachelor's",
//     benefits: [
//       "Health Insurance",
//       "401(k)",
//       "Paid Time Off",
//       "Professional Development",
//     ],
//     jobType: "Permanent",
//     jobRequirements: [
//       "3+ years of experience in retail operations",
//       "Strong organizational skills",
//     ],
//     aboutUs: "RetailPro is a leader in the retail industry...",
//   },
//   {
//     title: "DevOps Engineer",
//     companyName: "CloudServ",
//     companyLogo: "https://example.com/cloudserv-logo.png",
//     contractStatus: "Full-time",
//     locationStatus: "Remote",
//     jobDescription:
//       "Build and maintain CI/CD pipelines, automate deployments, and ensure high availability of cloud services...",
//     salary: {
//       min: 110000,
//       max: 140000,
//       currency: "USD",
//     },
//     location: {
//       city: "Dallas",
//       state: "TX",
//       country: "USA",
//       coordinates: [-96.797, 32.7767],
//     },
//     datePosted: new Date("2024-09-18"),
//     experienceLevel: "Mid-level",
//     companySize: "SMB",
//     industry: ["Cloud Computing", "DevOps"],
//     skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
//     educationLevel: "Bachelor's",
//     benefits: [
//       "Health Insurance",
//       "401(k)",
//       "Remote Work",
//       "Professional Development",
//     ],
//     jobType: "Permanent",
//     jobRequirements: [
//       "3+ years of experience in DevOps",
//       "Experience with cloud infrastructure",
//     ],
//     aboutUs: "CloudServ provides world-class cloud services to businesses...",
//   },
// ];

// Additional jobs can follow the same structure.
// export async function POST(req) {
//   await connectToDatabase(); // Connect to the database

//   try {
//     // Check if jobs already exist in the database
//     const existingJobs = await Job.find({});
//     if (existingJobs.length > 0) {
//       return NextResponse.json(
//         { message: "Jobs already seeded" },
//         { status: 200 }
//       );
//     }

//     // Insert seed data into the database
//     await Job.insertMany(jobSeedData);

//     // Successful response
//     return NextResponse.json(
//       { message: "Jobs seeded successfully" },
//       { status: 201 }
//     );
//   } catch (error) {
//     console.error("Error seeding jobs:", error); // Log the error for debugging
//     return NextResponse.json({ error: "Error seeding jobs" }, { status: 500 });
//   }
// }
export async function GET(request) {
  const ITEM_PER_PAGE = 5;

  await connectToDatabase();

  const { searchParams } = new URL(request.url);

  const page = searchParams.get("page") || 1;
  const search = searchParams.get("search") || "";
  const contractStatus = searchParams.getAll("contractStatus");
  const locationStatus = searchParams.getAll("locationStatus");
  const salaryMin = searchParams.get("salaryMin");
  const salaryMax = searchParams.get("salaryMax");
  const datePosted = searchParams.get("datePosted");
  const experienceLevel = searchParams.getAll("experienceLevel");
  const companySize = searchParams.getAll("companySize");
  const industry = searchParams.get("industry");
  const skills = searchParams.getAll("skills");
  const educationLevel = searchParams.get("educationLevel");
  const benefits = searchParams.getAll("benefits");
  const jobType = searchParams.getAll("jobType");
  const locationRadius = searchParams.get("locationRadius");
  const locationCenter = searchParams.get("locationCenter");

  const date = new Date();
  date.setDate(date.getDate() - parseInt(datePosted));

  const query = {
    ...(search && { title: { $regex: search, $options: "i" } }),
    ...(contractStatus.length && { contractStatus: { $in: contractStatus } }),
    ...(locationStatus.length && { locationStatus: { $in: locationStatus } }),
    ...(experienceLevel.length && {
      experienceLevel: { $in: experienceLevel },
    }),
    ...(companySize.length && { companySize: { $in: companySize } }),
    ...(benefits.length && { benefits: { $in: benefits } }),
    ...(jobType.length && { jobType: { $in: jobType } }),

    ...(salaryMin && {
      "salary.min": { $gte: Number(salaryMin) }, // Filter for salary.min
    }),
    ...(salaryMax && {
      "salary.max": { $lte: Number(salaryMax) }, // Filter for salary.max
    }),
    ...(industry && { industry: industry }),
    ...(skills.length && {
      skills: { $in: skills.map((skill) => new RegExp(skill, "i")) },
    }),
    // ...(skills && { skills: { $regex: skills, $options: "i" } }),
    ...(educationLevel && { educationLevel: educationLevel }),
    // Add additional filters like locationRadius or datePosted if necessary
    ...(datePosted && {
      datePosted: { $gte: date },
      // if(datePosted) {
      //   const date = new Date();
      //   date.setDate(date.getDate() - parseInt(datePosted));
      //   postedDate = { $gte: date };
      // },
    }),
  };

  try {
    // Get the total number of jobs matching the query
    const totalJobsCount = await Job.countDocuments(query);

    // Get the paginated jobs
    const jobs = await Job.find(query)
      .sort({ createdAt: -1 })
      .limit(ITEM_PER_PAGE)
      .skip((page - 1) * ITEM_PER_PAGE);

    // Return jobs and the count as part of the response
    return new Response(
      JSON.stringify({
        jobs, // Array of jobs
        totalJobsCount, // Total count for pagination
        currentPage: page, // Current page number
        totalPages: Math.ceil(totalJobsCount / ITEM_PER_PAGE), // Total pages based on count
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ message: "Error fetching jobs" }), {
      status: 500,
    });
  }
}
