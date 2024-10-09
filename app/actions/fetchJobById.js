import dbConnect from "@/lib/mongodb";
import Jobs from "@/app/models/Job";

export async function getJobById(id) {
  await dbConnect();
  try {
    const job = await Jobs.findById(id);
    return job;
  } catch (err) {
    throw new Error(err.message);
  }
}
