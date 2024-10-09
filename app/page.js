// app/page.js
import JobListPage from "@/app/components/JobListPage";

export default function Home() {
  return (
    <main className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Welcome to JobFinder
      </h1>
      <JobListPage />
    </main>
  );
}
