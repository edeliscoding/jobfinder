import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    title: String,
    companyName: String,
    companyLogo: String,
    contractStatus: {
      type: String,
      enum: ["Full-time", "Part-time", "Contract", "Temporary"],
    },
    locationStatus: {
      type: String,
      enum: ["Remote", "On-site", "Hybrid"],
    },
    jobDescription: String,
    salary: {
      min: {
        type: mongoose.Schema.Types.Number,
        default: 0,
      },
      max: {
        type: mongoose.Schema.Types.Number,
        default: 0,
      },
      currency: {
        type: String,
        default: "USD",
      },
    },
    location: {
      city: String,
      state: String,
      country: String,
      coordinates: {
        type: [Number],
        index: "2dsphere",
      },
    },
    datePosted: {
      type: Date,
      default: Date.now,
    },
    experienceLevel: {
      type: String,
      enum: ["Entry", "Mid-level", "Senior", "Executive"],
    },
    companySize: {
      type: String,
      enum: ["Startup", "SMB", "Enterprise"],
    },
    industry: [String],
    skills: [String],
    educationLevel: {
      type: String,
      enum: ["High School", "Bachelor's", "Master's", "PhD"],
    },
    benefits: [String],
    jobType: {
      type: String,
      enum: ["Permanent", "Temporary", "Internship", "Volunteer"],
    },
    jobRequirements: [String],
    aboutUs: String,
  },
  { timestamps: true }
);

const Job = mongoose.models.Job || mongoose.model("Job", JobSchema);

export default Job;
